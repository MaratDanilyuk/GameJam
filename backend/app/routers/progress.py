from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.database import get_db
from app.dependencies import get_current_user
from app.models.user import User
from app.repositories.child_repository import ChildRepository
from app.repositories.progress_repository import ProgressRepository
from app.repositories.event_log_repository import EventLogRepository
from app.models.event_log import EventType
from app.schemas.progress import ProgressCreate, ProgressResponse
from app.services.guardian_service import calculate_guardian_stage

router = APIRouter(prefix="/progress", tags=["progress"])


@router.post("", response_model=ProgressResponse, status_code=status.HTTP_201_CREATED)
async def save_progress(
    body: ProgressCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    child_repo = ChildRepository(db)
    if not await child_repo.belongs_to_parent(body.child_id, current_user.id):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Child not found")

    progress_repo = ProgressRepository(db)
    event_repo = EventLogRepository(db)

    old_total = await progress_repo.get_total_for_child(body.child_id)
    old_stage = calculate_guardian_stage(old_total)

    fragment = await progress_repo.add_fragment(
        child_id=body.child_id,
        fragment_type=body.fragment_type,
        count=body.count,
    )

    new_total = old_total + body.count
    new_stage = calculate_guardian_stage(new_total)

    if new_stage > old_stage:
        await event_repo.create(
            child_id=body.child_id,
            event_type=EventType.guardian_stage_changed,
            details={"old_stage": old_stage, "new_stage": new_stage, "total_fragments": new_total},
        )

    return fragment

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.database import get_db
from app.dependencies import get_current_user
from app.models.user import User
from app.repositories.child_repository import ChildRepository
from app.repositories.progress_repository import ProgressRepository
from app.schemas.progress import WorldStateResponse
from app.services.guardian_service import calculate_guardian_stage

router = APIRouter(tags=["world"])


@router.get("/world-state/{child_id}", response_model=WorldStateResponse)
async def get_world_state(
    child_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    child_repo = ChildRepository(db)
    if not await child_repo.belongs_to_parent(child_id, current_user.id):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Child not found")

    progress_repo = ProgressRepository(db)
    total = await progress_repo.get_total_for_child(child_id)
    by_type = await progress_repo.get_by_type_for_child(child_id)

    return WorldStateResponse(
        child_id=child_id,
        guardian_stage=calculate_guardian_stage(total),
        total_fragments=total,
        fragments_by_type=by_type,
    )

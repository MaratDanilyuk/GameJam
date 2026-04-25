from datetime import datetime, timezone, timedelta
from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.database import get_db
from app.dependencies import get_current_user
from app.models.user import User
from app.repositories.child_repository import ChildRepository
from app.repositories.progress_repository import ProgressRepository
from app.repositories.photo_repository import PhotoRepository
from app.repositories.event_log_repository import EventLogRepository
from app.schemas.stats import ParentStatsResponse, ChildStatsResponse, StatsByType, EventLogResponse

router = APIRouter(prefix="/parent", tags=["parent"])


@router.get("/stats", response_model=ParentStatsResponse)
async def get_parent_stats(
    days: int = Query(default=7, ge=1, le=365, description="Period in days"),
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    now = datetime.now(timezone.utc)
    period_from = now - timedelta(days=days)

    children = await ChildRepository(db).get_by_parent(current_user.id)
    progress_repo = ProgressRepository(db)
    photo_repo = PhotoRepository(db)

    stats = []
    for child in children:
        by_type_raw = await progress_repo.get_stats_in_period(child.id, period_from, now)
        total = await progress_repo.get_total_in_period(child.id, period_from, now)
        photos_count = await photo_repo.count_by_child_in_period(child.id, period_from, now)

        stats.append(ChildStatsResponse(
            child_id=child.id,
            child_name=child.name,
            period_from=period_from,
            period_to=now,
            total_fragments=total,
            by_type=StatsByType(
                knowledge=by_type_raw.get("knowledge", 0),
                color=by_type_raw.get("color", 0),
                movement=by_type_raw.get("movement", 0),
                sound=by_type_raw.get("sound", 0),
                shape=by_type_raw.get("shape", 0),
            ),
            photos_uploaded=photos_count,
        ))

    return ParentStatsResponse(children=stats)


@router.get("/events", response_model=list[EventLogResponse])
async def get_event_feed(
    limit: int = Query(default=50, ge=1, le=200),
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    children = await ChildRepository(db).get_by_parent(current_user.id)
    child_ids = [c.id for c in children]
    if not child_ids:
        return []
    return await EventLogRepository(db).get_feed_for_parent(child_ids, limit=limit)

from datetime import datetime
from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.fragment_progress import FragmentProgress, FragmentType


class ProgressRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def add_fragment(self, child_id: int, fragment_type: FragmentType, count: int = 1) -> FragmentProgress:
        fragment = FragmentProgress(child_id=child_id, fragment_type=fragment_type, count=count)
        self.db.add(fragment)
        await self.db.commit()
        await self.db.refresh(fragment)
        return fragment

    async def get_total_for_child(self, child_id: int) -> int:
        result = await self.db.execute(
            select(func.coalesce(func.sum(FragmentProgress.count), 0))
            .where(FragmentProgress.child_id == child_id)
        )
        return result.scalar_one()

    async def get_by_type_for_child(self, child_id: int) -> dict[str, int]:
        result = await self.db.execute(
            select(FragmentProgress.fragment_type, func.sum(FragmentProgress.count))
            .where(FragmentProgress.child_id == child_id)
            .group_by(FragmentProgress.fragment_type)
        )
        return {row[0].value: row[1] for row in result.all()}

    async def get_stats_in_period(
        self, child_id: int, period_from: datetime, period_to: datetime
    ) -> dict[str, int]:
        result = await self.db.execute(
            select(FragmentProgress.fragment_type, func.sum(FragmentProgress.count))
            .where(
                FragmentProgress.child_id == child_id,
                FragmentProgress.earned_at >= period_from,
                FragmentProgress.earned_at <= period_to,
            )
            .group_by(FragmentProgress.fragment_type)
        )
        return {row[0].value: row[1] for row in result.all()}

    async def get_total_in_period(self, child_id: int, period_from: datetime, period_to: datetime) -> int:
        result = await self.db.execute(
            select(func.coalesce(func.sum(FragmentProgress.count), 0))
            .where(
                FragmentProgress.child_id == child_id,
                FragmentProgress.earned_at >= period_from,
                FragmentProgress.earned_at <= period_to,
            )
        )
        return result.scalar_one()

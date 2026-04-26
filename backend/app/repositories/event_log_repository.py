from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.event_log import EventLog, EventType


class EventLogRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(self, child_id: int, event_type: EventType, details: dict | None = None) -> EventLog:
        event = EventLog(child_id=child_id, event_type=event_type, details=details)
        self.db.add(event)
        await self.db.commit()
        await self.db.refresh(event)
        return event

    async def get_feed(self, child_id: int, limit: int = 50, offset: int = 0) -> list[EventLog]:
        result = await self.db.execute(
            select(EventLog)
            .where(EventLog.child_id == child_id)
            .order_by(EventLog.occurred_at.desc())
            .limit(limit)
            .offset(offset)
        )
        return list(result.scalars().all())

    async def get_feed_for_parent(self, child_ids: list[int], limit: int = 100) -> list[EventLog]:
        result = await self.db.execute(
            select(EventLog)
            .where(EventLog.child_id.in_(child_ids))
            .order_by(EventLog.occurred_at.desc())
            .limit(limit)
        )
        return list(result.scalars().all())

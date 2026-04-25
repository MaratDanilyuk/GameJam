from datetime import datetime
from pydantic import BaseModel

from app.models.event_log import EventType


class StatsByType(BaseModel):
    knowledge: int = 0
    color: int = 0
    movement: int = 0
    sound: int = 0
    shape: int = 0


class ChildStatsResponse(BaseModel):
    child_id: int
    child_name: str
    period_from: datetime
    period_to: datetime
    total_fragments: int
    by_type: StatsByType
    photos_uploaded: int


class ParentStatsResponse(BaseModel):
    children: list[ChildStatsResponse]


class EventLogResponse(BaseModel):
    id: int
    child_id: int
    event_type: EventType
    details: dict | None
    occurred_at: datetime

    model_config = {"from_attributes": True}

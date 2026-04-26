from datetime import datetime
from pydantic import BaseModel

from app.models.fragment_progress import FragmentType


class ProgressCreate(BaseModel):
    child_id: int
    fragment_type: FragmentType
    count: int = 1


class ProgressResponse(BaseModel):
    id: int
    child_id: int
    fragment_type: FragmentType
    count: int
    earned_at: datetime

    model_config = {"from_attributes": True}


class WorldStateResponse(BaseModel):
    child_id: int
    guardian_stage: int
    total_fragments: int
    fragments_by_type: dict[str, int]

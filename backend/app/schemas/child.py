from datetime import datetime
from pydantic import BaseModel


class ChildCreate(BaseModel):
    name: str
    avatar: str | None = None


class ChildResponse(BaseModel):
    id: int
    name: str
    avatar: str | None
    created_at: datetime

    model_config = {"from_attributes": True}

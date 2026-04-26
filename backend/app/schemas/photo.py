from datetime import datetime
from pydantic import BaseModel

from app.models.photo import PhotoLocation


class PhotoResponse(BaseModel):
    id: int
    child_id: int
    location: PhotoLocation
    file_path: str
    uploaded_at: datetime

    model_config = {"from_attributes": True}

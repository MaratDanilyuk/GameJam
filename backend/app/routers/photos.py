import os
import uuid
import aiofiles

from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.config import settings
from app.database import get_db
from app.dependencies import get_current_user
from app.models.user import User
from app.models.photo import PhotoLocation
from app.repositories.child_repository import ChildRepository
from app.repositories.photo_repository import PhotoRepository
from app.repositories.event_log_repository import EventLogRepository
from app.models.event_log import EventType
from app.schemas.photo import PhotoResponse

router = APIRouter(prefix="/photos", tags=["photos"])

ALLOWED_CONTENT_TYPES = {"image/jpeg", "image/png", "image/webp"}
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB


@router.post("", response_model=PhotoResponse, status_code=status.HTTP_201_CREATED)
async def upload_photo(
    child_id: int = Form(...),
    location: PhotoLocation = Form(...),
    file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if file.content_type not in ALLOWED_CONTENT_TYPES:
        raise HTTPException(status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE, detail="Only JPEG, PNG or WebP allowed")

    child_repo = ChildRepository(db)
    if not await child_repo.belongs_to_parent(child_id, current_user.id):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Child not found")

    content = await file.read()
    if len(content) > MAX_FILE_SIZE:
        raise HTTPException(status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE, detail="File too large (max 10 MB)")

    ext = os.path.splitext(file.filename or "photo.jpg")[1] or ".jpg"
    filename = f"{uuid.uuid4().hex}{ext}"
    dest_dir = os.path.join(settings.upload_dir, location.value)
    os.makedirs(dest_dir, exist_ok=True)
    dest_path = os.path.join(dest_dir, filename)

    async with aiofiles.open(dest_path, "wb") as f:
        await f.write(content)

    photo_repo = PhotoRepository(db)
    photo = await photo_repo.create(child_id=child_id, location=location, file_path=dest_path)

    event_repo = EventLogRepository(db)
    await event_repo.create(
        child_id=child_id,
        event_type=EventType.location_restored,
        details={"location": location.value, "photo_id": photo.id},
    )

    return photo

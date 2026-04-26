from datetime import datetime
from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.photo import Photo, PhotoLocation


class PhotoRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(self, child_id: int, location: PhotoLocation, file_path: str) -> Photo:
        photo = Photo(child_id=child_id, location=location, file_path=file_path)
        self.db.add(photo)
        await self.db.commit()
        await self.db.refresh(photo)
        return photo

    async def get_by_child(self, child_id: int) -> list[Photo]:
        result = await self.db.execute(select(Photo).where(Photo.child_id == child_id))
        return list(result.scalars().all())

    async def count_by_child_in_period(self, child_id: int, period_from: datetime, period_to: datetime) -> int:
        result = await self.db.execute(
            select(func.count(Photo.id))
            .where(
                Photo.child_id == child_id,
                Photo.uploaded_at >= period_from,
                Photo.uploaded_at <= period_to,
            )
        )
        return result.scalar_one()

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.child import Child


class ChildRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_by_id(self, child_id: int) -> Child | None:
        result = await self.db.execute(select(Child).where(Child.id == child_id))
        return result.scalar_one_or_none()

    async def get_by_parent(self, parent_id: int) -> list[Child]:
        result = await self.db.execute(select(Child).where(Child.parent_id == parent_id))
        return list(result.scalars().all())

    async def create(self, parent_id: int, name: str, avatar: str | None = None) -> Child:
        child = Child(parent_id=parent_id, name=name, avatar=avatar)
        self.db.add(child)
        await self.db.commit()
        await self.db.refresh(child)
        return child

    async def belongs_to_parent(self, child_id: int, parent_id: int) -> bool:
        result = await self.db.execute(
            select(Child).where(Child.id == child_id, Child.parent_id == parent_id)
        )
        return result.scalar_one_or_none() is not None

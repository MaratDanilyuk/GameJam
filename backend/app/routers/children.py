from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.database import get_db
from app.dependencies import get_current_user
from app.models.user import User
from app.repositories.child_repository import ChildRepository
from app.schemas.child import ChildCreate, ChildResponse

router = APIRouter(prefix="/children", tags=["children"])


@router.post("", response_model=ChildResponse, status_code=status.HTTP_201_CREATED)
async def create_child(
    body: ChildCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return await ChildRepository(db).create(parent_id=current_user.id, name=body.name, avatar=body.avatar)


@router.get("", response_model=list[ChildResponse])
async def list_children(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return await ChildRepository(db).get_by_parent(current_user.id)

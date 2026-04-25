from datetime import datetime
from sqlalchemy import String, DateTime, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func

from app.database import Base


class Child(Base):
    __tablename__ = "children"

    id: Mapped[int] = mapped_column(primary_key=True)
    parent_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    avatar: Mapped[str | None] = mapped_column(String(255), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    parent: Mapped["User"] = relationship("User", back_populates="children")
    fragments: Mapped[list["FragmentProgress"]] = relationship("FragmentProgress", back_populates="child", cascade="all, delete-orphan")
    photos: Mapped[list["Photo"]] = relationship("Photo", back_populates="child", cascade="all, delete-orphan")
    events: Mapped[list["EventLog"]] = relationship("EventLog", back_populates="child", cascade="all, delete-orphan")

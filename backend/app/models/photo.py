import enum
from datetime import datetime
from sqlalchemy import String, DateTime, ForeignKey, Enum
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func

from app.database import Base


class PhotoLocation(str, enum.Enum):
    workshop = "workshop"           # Стертая Мастерская
    objects_world = "objects_world" # Мир Пропавших Объектов


class Photo(Base):
    __tablename__ = "photos"

    id: Mapped[int] = mapped_column(primary_key=True)
    child_id: Mapped[int] = mapped_column(ForeignKey("children.id", ondelete="CASCADE"), nullable=False, index=True)
    location: Mapped[PhotoLocation] = mapped_column(Enum(PhotoLocation), nullable=False)
    file_path: Mapped[str] = mapped_column(String(500), nullable=False)
    uploaded_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    child: Mapped["Child"] = relationship("Child", back_populates="photos")

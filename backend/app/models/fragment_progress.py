import enum
from datetime import datetime
from sqlalchemy import DateTime, ForeignKey, Enum, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func

from app.database import Base


class FragmentType(str, enum.Enum):
    knowledge = "knowledge"   # Разорванная Библиотека (чтение)
    color = "color"           # Стертая Мастерская (рисование)
    movement = "movement"     # Замерший Город (физическая активность)
    sound = "sound"           # Тихая Долина (звук)
    shape = "shape"           # Мир Пропавших Объектов (поиск)


class FragmentProgress(Base):
    __tablename__ = "fragment_progress"

    id: Mapped[int] = mapped_column(primary_key=True)
    child_id: Mapped[int] = mapped_column(ForeignKey("children.id", ondelete="CASCADE"), nullable=False, index=True)
    fragment_type: Mapped[FragmentType] = mapped_column(Enum(FragmentType), nullable=False)
    count: Mapped[int] = mapped_column(Integer, default=1, nullable=False)
    earned_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    child: Mapped["Child"] = relationship("Child", back_populates="fragments")

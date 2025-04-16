from datetime import datetime
from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


class Base(DeclarativeBase):
    pass


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    role: Mapped[int] = mapped_column(nullable=False)
    first_name: Mapped[str] = mapped_column(
        String(length=15), nullable=False, index=True
    )
    last_name: Mapped[str] = mapped_column(
        String(length=15), nullable=False, index=True
    )
    user_email: Mapped[str] = mapped_column(
        String(length=40), nullable=False, index=True
    )
    user_password: Mapped[str] = mapped_column(String(length=80), nullable=False)
    registered_at: Mapped[datetime] = mapped_column(default=datetime.now)
    edited_at: Mapped[datetime] = mapped_column(onupdate=datetime.now, nullable=True)

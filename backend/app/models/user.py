from datetime import datetime
from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column
from app.db.database import Base  


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    role: Mapped[int] = mapped_column(nullable=False)
    first_name: Mapped[str] = mapped_column(String(15), nullable=False, index=True)
    last_name: Mapped[str] = mapped_column(String(15), nullable=False, index=True)
    user_email: Mapped[str] = mapped_column(
        String(40), nullable=False, unique=True, index=True
    )
    user_password: Mapped[str] = mapped_column(String(80), nullable=False)
    registered_at: Mapped[datetime] = mapped_column(default=datetime.utcnow)
    edited_at: Mapped[datetime] = mapped_column(onupdate=datetime.utcnow, nullable=True)

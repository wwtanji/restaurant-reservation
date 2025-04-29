from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr, field_validator
from email_validator import validate_email, EmailNotValidError


class UserCreate(BaseModel):
    role: int = 0
    first_name: str
    last_name: str
    user_email: EmailStr
    user_password: str

    @field_validator("user_password")
    @classmethod
    def validate_password(cls, value: str) -> str:
        if len(value) < 8:
            raise ValueError("Password must be at least 8 characters long")
        return value


class UserLogin(BaseModel):
    user_email: EmailStr
    user_password: str

    @field_validator("user_email")
    @classmethod
    def validate_email_field(cls, value: str) -> str:
        try:
            valid = validate_email(value)
            return valid.email
        except EmailNotValidError as e:
            raise ValueError(str(e)) from e

    @field_validator("user_password")
    @classmethod
    def validate_password(cls, value: str) -> str:
        if len(value) < 8:
            raise ValueError("Password must be at least 8 characters long")
        return value


class UserRead(BaseModel):
    id: int
    role: int
    first_name: str
    last_name: str
    user_email: EmailStr
    registered_at: datetime
    edited_at: Optional[datetime] = None

    model_config = {"from_attributes": True}

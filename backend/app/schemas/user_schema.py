from pydantic import BaseModel, EmailStr, constr, field_validator, ConfigDict
from typing import Optional, Annotated
from email_validator import validate_email, EmailNotValidError
from fastapi import HTTPException


class UserRegister(BaseModel):
    role: int = 0
    first_name: Annotated[str, constr(max_length=15)]
    last_name: Annotated[str, constr(max_length=15)]
    user_email: EmailStr
    user_password: Annotated[str, constr(min_length=8, max_length=80)]


class UserLogin(BaseModel):
    user_email: EmailStr
    user_password: Annotated[str, constr(min_length=8)]

    @field_validator("user_email")
    @classmethod
    def validate_email(cls, value: str) -> str:
        try:
            valid = validate_email(value)
            return valid.email
        except EmailNotValidError as e:
            raise HTTPException(status_code=422, detail=str(e)) from e

    @field_validator("user_password")
    @classmethod
    def validate_password(cls, value: str) -> str:
        if len(value) < 8:
            raise HTTPException(
                status_code=422, detail="Password must be at least 8 characters long"
            )
        return value


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    sub: Optional[str] = None


class UserProfile(BaseModel):
    id: int
    first_name: str
    last_name: str
    user_email: EmailStr
    role: int

    model_config = ConfigDict(from_attributes=True)

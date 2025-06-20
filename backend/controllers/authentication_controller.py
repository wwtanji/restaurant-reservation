import os
import logging
from datetime import datetime, timedelta, timezone
from dotenv import load_dotenv
from email_validator import validate_email, EmailNotValidError
from fastapi import APIRouter, Depends, HTTPException, Body
from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext
from pydantic import BaseModel, field_validator
from sqlalchemy.orm import Session

from utils.jwt_utils import (
    create_access_token,
    create_refresh_token,
    verify_access_token,
)
from db import get_db
from db.orm import User


load_dotenv()

logger = logging.getLogger(__name__)
AUTH_CONTROLLER = APIRouter(prefix="/authentication")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="authentication/login")
bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


class UserModel(BaseModel):
    role: int = 0
    first_name: str
    last_name: str
    user_email: str
    user_password: str


class LoginModel(BaseModel):
    user_email: str
    user_password: str

    @field_validator("user_email")
    @classmethod
    def validate_email(cls, value):
        try:
            valid = validate_email(value)
            return valid.email
        except EmailNotValidError as e:
            raise HTTPException(status_code=422, detail=str(e)) from e

    @field_validator("user_password")
    @classmethod
    def validate_password(cls, value):
        if len(value) < 8:
            raise HTTPException(
                status_code=422, detail="Password must be at least 8 characters long"
            )
        return value


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return bcrypt_context.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    return bcrypt_context.hash(password)


@AUTH_CONTROLLER.post("/register")
def register(user: UserModel, db: Session = Depends(get_db)):
    try:
        existing_user = (
            db.query(User).filter(User.user_email == user.user_email).first()
        )
        if existing_user:
            logger.warning(f"User with email {user.user_email} already exists.")
            raise HTTPException(status_code=400, detail="Email already registered")

        hashed_password = get_password_hash(user.user_password)

        new_user = User(
            first_name=user.first_name,
            last_name=user.last_name,
            user_email=user.user_email,
            user_password=hashed_password,
            role=user.role,
            registered_at=datetime.now(timezone.utc),
        )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

        token = create_access_token(
            data={"sub": new_user.user_email}, expires_delta=access_token_expires
        )

        refresh_token = create_refresh_token(data={"sub": new_user.user_email})

        logger.info(f"Access token created for user {user.user_email}.")
        return {
            "access_token": token,
            "refresh_token": refresh_token,
            "token_type": "bearer",
        }

    except Exception as e:
        logger.error(f"Error registering user: {e}")
        raise HTTPException(status_code=400, detail="Error registering user") from e


@AUTH_CONTROLLER.post("/login")
def login(user: LoginModel, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.user_email == user.user_email).first()

    if not db_user:
        logger.warning(f"Login failed: user with email '{user.user_email}' not found.")
        raise HTTPException(status_code=400, detail="Invalid email or password")

    if not verify_password(user.user_password, db_user.user_password):
        logger.warning(f"Login failed: invalid password for user '{user.user_email}'.")
        raise HTTPException(status_code=400, detail="Invalid email or password")

    token = create_access_token(data={"sub": db_user.user_email})
    refresh_token = create_refresh_token(data={"sub": db_user.user_email})

    logger.info(f"User '{user.user_email}' logged in successfully.")

    return {
        "access_token": token,
        "refresh_token": refresh_token,
        "token_type": "bearer",
    }


@AUTH_CONTROLLER.get("/me")
def get_me(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    payload = verify_access_token(token)
    user_email = payload.get("sub")
    user = db.query(User).filter(User.user_email == user_email).first()
    if not user:
        raise HTTPException(
            status_code=401, detail="Invalid authentication credentials"
        )
    return {
        "id": user.id,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "user_email": user.user_email,
        "role": user.role,
    }


@AUTH_CONTROLLER.post("/refresh")
def refresh_token(refresh_token: str = Body(...), db: Session = Depends(get_db)):
    try:
        payload = verify_access_token(refresh_token)
        user_email = payload.get("sub")

        if user_email is None:
            raise HTTPException(status_code=401, detail="Invalid refresh token")

        user = db.query(User).filter(User.user_email == user_email).first()
        if not user:
            raise HTTPException(status_code=401, detail="User not found")

        new_access_token = create_access_token(
            data={"sub": user_email},
            expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
        )

        return {"access_token": new_access_token, "token_type": "bearer"}

    except Exception as e:
        logger.error(f"Failed to refresh token: {e}")
        raise HTTPException(status_code=401, detail="Could not refresh token")

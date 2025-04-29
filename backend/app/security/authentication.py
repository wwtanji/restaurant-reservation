import os
import logging
from datetime import datetime, timedelta, timezone
from dotenv import load_dotenv
from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext
from sqlalchemy.orm import Session

from app.schemas.user import UserCreate, UserLogin, UserRead
from app.security.jtw_utils import create_access_token, verify_access_token
from app.db.session import get_db
from app.models.user import User

load_dotenv()

logger = logging.getLogger(__name__)
AUTH_ROUTER = APIRouter(prefix="/authentication", tags=["authentication"])

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="authentication/login")

SECRET_KEY = os.getenv("SECRET_KEY")
ACCESS_TOKEN_EXPIRE_MINUTES = 60


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)


@AUTH_ROUTER.post(
    "/register",
    response_model=UserRead,
    summary="Register a new user",
)
def register(
    payload: UserCreate,
    db: Session = Depends(get_db),
):
    if db.query(User).filter(User.user_email == payload.user_email).first():
        logger.warning(f"Email already registered: {payload.user_email}")
        raise HTTPException(status_code=400, detail="Email already registered")

    new_user = User(
        first_name=payload.first_name,
        last_name=payload.last_name,
        user_email=payload.user_email,
        user_password=get_password_hash(payload.user_password),
        role=payload.role,
        registered_at=datetime.now(timezone.utc),
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


@AUTH_ROUTER.post(
    "/login",
    summary="Obtain access token",
)
def login(
    payload: UserLogin,
    db: Session = Depends(get_db),
):
    db_user = db.query(User).filter(User.user_email == payload.user_email).first()
    if not db_user or not verify_password(payload.user_password, db_user.user_password):
        logger.warning(f"Invalid credentials for: {payload.user_email}")
        raise HTTPException(status_code=400, detail="Invalid email or password")

    access_token = create_access_token(
        data={"sub": db_user.user_email},
        expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
    )
    return {"access_token": access_token, "token_type": "bearer"}


@AUTH_ROUTER.get(
    "/me",
    response_model=UserRead,
    summary="Get current user",
)
def get_me(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db),
):
    payload = verify_access_token(token)
    email = payload.get("sub")
    user = db.query(User).filter(User.user_email == email).first()
    if not user:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")
    return user

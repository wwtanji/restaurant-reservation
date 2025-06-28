import jwt
from datetime import datetime, timedelta, timezone
from fastapi import HTTPException
import os
from dotenv import load_dotenv
from sqlalchemy.orm import Session
from app.models.refresh_token import RefreshToken

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
if not SECRET_KEY:
    raise RuntimeError("SECRET_KEY not found in environment variables.")

ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 0.5  # 30 seconds
REFRESH_TOKEN_EXPIRE_DAYS = 30

def create_access_token(data: dict, expires_delta: timedelta | None = None) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def create_refresh_token(user_id: int, db: Session) -> str:
    expires_delta = timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)
    expires_at = datetime.now(timezone.utc) + expires_delta
    
    # Create refresh token with user_id as subject
    refresh_token = jwt.encode(
        {"sub": str(user_id), "exp": expires_at},
        SECRET_KEY,
        algorithm=ALGORITHM
    )
    
    # Store refresh token in database
    db_token = RefreshToken(
        token=refresh_token,
        expires_at=expires_at,
        user_id=user_id
    )
    db.add(db_token)
    db.commit()
    
    return refresh_token

def verify_token(token: str, token_type: str = "access") -> dict:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=401,
            detail=f"{token_type.title()} token has expired"
        )
    except jwt.InvalidTokenError:
        raise HTTPException(
            status_code=401,
            detail=f"Invalid {token_type} token"
        )

def verify_and_get_refresh_token(token: str, db: Session) -> RefreshToken:
    # Verify JWT signature and expiration
    payload = verify_token(token, "refresh")
    
    # Get token from database
    db_token = db.query(RefreshToken).filter(
        RefreshToken.token == token,
        RefreshToken.is_revoked == False
    ).first()
    
    if not db_token:
        raise HTTPException(
            status_code=401,
            detail="Refresh token not found or has been revoked"
        )
    
    return db_token

def revoke_refresh_token(token: str, db: Session) -> None:
    db_token = db.query(RefreshToken).filter(RefreshToken.token == token).first()
    if db_token:
        db_token.is_revoked = True
        db.commit()

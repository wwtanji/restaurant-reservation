from pydantic import BaseModel
from datetime import datetime

class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"

class TokenRefreshRequest(BaseModel):
    refresh_token: str

class TokenPayload(BaseModel):
    sub: str  # user_email
    exp: datetime | None = None 
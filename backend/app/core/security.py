from uuid import UUID

import jwt
from fastapi import Depends, HTTPException
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from app.core.config import settings

security_scheme = HTTPBearer()

async def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security_scheme)) -> UUID:
  token = credentials.credentials
  try:
    payload = jwt.decode(
      token,
      settings.jwt_secret,
      algorithms=["HS256"],
      audience="authenticated",
      options={
        "verify_signature": True, 
        "require": ["exp", "sub", "aud"]
      }
    )
    user_id = payload.get("sub")
    if not user_id:
      raise HTTPException(status_code=401, detail="Invalid token")
    return UUID(user_id)
  except jwt.ExpiredSignatureError:
    raise HTTPException(status_code=401, detail="Token has expired")
  except jwt.InvalidTokenError:
    raise HTTPException(status_code=401, detail="Invalid token")
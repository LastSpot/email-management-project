from sqlalchemy import Column, Integer, String, DateTime, UUID, ForeignKey
from sqlalchemy.sql import func
from app.db.connection import Base
from app.core.config import settings
from app.models.user_model import AuthUser

class Profile(Base):
  __tablename__ = "profiles"
  __table_args__ = {'schema': settings.POSTGRES_SCHEMA}
  
  id = Column(Integer, primary_key=True, autoincrement=True)
  created_at = Column(DateTime, nullable=False, default=func.now())
  updated_at = Column(DateTime, nullable=False, default=func.now(), onupdate=func.now())
  
  # User information
  user_id = Column(UUID, ForeignKey("auth.users.id", ondelete="CASCADE", onupdate="CASCADE"), nullable=False)
  name = Column(String, nullable=False)
  email = Column(String, nullable=False)
  phone = Column(String, nullable=True)
  plan = Column(String, nullable=False, default="free")
  role = Column(String, nullable=False, default="user")
  plan_expires_at = Column(DateTime, nullable=True)  
  
from sqlalchemy import Column, UUID

# Created to reference the auth.users table
class AuthUser():
  __tablename__ = "users"
  __table_args__ = {'schema': 'auth'}
  
  id = Column(UUID, primary_key=True)
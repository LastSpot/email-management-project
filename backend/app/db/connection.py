from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from app.core.config import settings

engine = create_engine(settings.POSTGRES_URL, pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def init_db():
  Base.metadata.create_all(bind=engine)
  
def get_session():
  return SessionLocal()

def test_connection():
  try:
    with engine.connect():
      print("Connected to PostgreSQL")
  except Exception as e:
    print(f"Error connecting to PostgreSQL: {e}")
    
# Test connection on import
if __name__ != "__main__":
  test_connection()
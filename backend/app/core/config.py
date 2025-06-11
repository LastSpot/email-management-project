from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
  API_NAME: str
  API_VERSION: str
  
  POSTGRES_USER: str
  POSTGRES_PASSWORD: str
  POSTGRES_HOST: str
  POSTGRES_PORT: int
  POSTGRES_DBNAME: str
  POSTGRES_SCHEMA: str = "public"
  
  JWT_SECRET: str
  
  @property
  def POSTGRES_URL(self) -> str:
    return (
      f"postgresql+psycopg2://{self.POSTGRES_USER}:{self.POSTGRES_PASSWORD}@{self.POSTGRES_HOST}:{self.POSTGRES_PORT}/{self.POSTGRES_DBNAME}?sslmode=require"
    )
  
  model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")
    
@lru_cache
def get_settings():
  return Settings()

settings = get_settings()
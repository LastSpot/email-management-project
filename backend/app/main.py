from fastapi import FastAPI
from contextlib import asynccontextmanager
from app.core.config import settings
from app.db.connection import init_db
from app.models import *

@asynccontextmanager
async def lifespan(app: FastAPI):
  init_db()
  yield

app = FastAPI(
  title=settings.API_NAME,
  version=settings.API_VERSION,
  lifespan=lifespan,
  docs_url="/docs",
  redoc_url="/redoc",
  openapi_url="/openapi.json"
)

@app.get('/info')
async def info():
  return {
    "api_name": settings.API_NAME,
    "api_version": settings.API_VERSION,
    "postgres_url": settings.POSTGRES_URL,
  }

@app.get("/")
async def root():
  return {"message": "Backend API"}

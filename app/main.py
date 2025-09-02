from fastapi import FastAPI
from app import models
from app.database import engine
from app.routers import users, post, auth , vote
from app.config import settings


models.Base.metadata.create_all(bind = engine)

app = FastAPI()

app.include_router(post.router)
app.include_router(users.router)
app.include_router(auth.router)
app.include_router(vote.router)


@app.get('/')
def root():
  return "Welcome to my project"
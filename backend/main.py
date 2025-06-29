import fastapi as fa
from fastapi.middleware.cors import CORSMiddleware
from app.controllers import ALL_CONTROLLERS

API = fa.FastAPI(title="API", version="0.1.0", root_path="/api")

origins = [
    "http://localhost:3000",
]

API.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
    expose_headers=["*"],
    max_age=3600,
)

for router in ALL_CONTROLLERS:
    API.include_router(router)


@API.get("/")
async def root():
    return {"message": "API is working"}

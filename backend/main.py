import fastapi as fa
from router import ALL_CONTROLLERS

API = fa.FastAPI(title="API", version="0.1.0", root_path="/api")


@API.get("/")
async def root():
    return {"message": "API is working"}

for router in ALL_CONTROLLERS:
    API.include_router(router)
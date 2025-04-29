import fastapi as fa
from app.security.authentication import AUTH_CONTROLLER

ROOT_ROUTER = fa.APIRouter()


@ROOT_ROUTER.get("/")
def test():
    return {"hello": "world"}


ALL_CONTROLLERS = [
    ROOT_ROUTER,
    AUTH_CONTROLLER
]
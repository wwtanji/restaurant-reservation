import fastapi as fa
from router.authentication import AUTH_ROUTER

ROOT_ROUTER = fa.APIRouter()


@ROOT_ROUTER.get("/")
def test():
    return {"hello": "world"}


ALL_CONTROLLERS = [
    ROOT_ROUTER,
    AUTH_ROUTER
]
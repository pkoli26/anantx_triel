from fastapi import APIRouter
from fastapi import Depends

from app.security.oauth2 import (
    get_current_user
)

router = APIRouter(
    prefix="/api/user",
    tags=["User"]
)


@router.get("/profile")
def profile(
        current_user=Depends(
            get_current_user
        )
):

    return {
        "message": "Access Granted",
        "user": current_user
    }

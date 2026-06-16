from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.schemas.user_schema import UserRegister
from app.schemas.user_schema import UserLogin

from app.models.user import User

from app.services.user_services import (
    get_user_by_email,
    create_user
)

from app.security.auth_handler import (
    hash_password,
    verify_password
)

from app.security.jwt_handler import (
    create_access_token
)

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"]
)

@router.post("/register")
def register(
        user: UserRegister,
        db: Session = Depends(get_db)
):

    existing_user = get_user_by_email(
        db,
        user.email
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    new_user = User(
    name=user.name,
    email=user.email,
    password=hash_password(
        user.password
    ),
    role="ADMIN"
)

    create_user(
        db,
        new_user
    )

    return {
        "message":
        "User registered successfully"
    }

@router.post("/login")
def login(
        user: UserLogin,
        db: Session = Depends(get_db)
):

    db_user = get_user_by_email(
        db,
        user.email
    )

    if not db_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    if not verify_password(
        user.password,
        db_user.password
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    access_token = create_access_token(
    {
        "user_id": db_user.id,
        "sub": db_user.email,
        "role": db_user.role
    }
)

    return {
        "access_token":access_token,
        "token_type": "bearer"
    }

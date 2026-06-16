import time

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.exc import OperationalError

from app.api.products import router as product_router
from app.api.auth import router as auth_router
from app.api.user import router as user_router
from app.api.cart import router as cart_router

from app.database.database import Base
from app.database.database import engine

# Import models
from app.models.user import User
from app.models.product import Product
from app.models.cart import Cart

app = FastAPI(
    title="AnantBuy API"
)
app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:4000"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)


def wait_for_db(retries: int = 10, delay: int = 3) -> None:
    """Retry connecting to the database until it becomes available."""
    for attempt in range(retries):
        try:
            with engine.connect():
                return
        except OperationalError:
            if attempt < retries - 1:
                time.sleep(delay)
            else:
                raise


@app.on_event("startup")
def startup():
    wait_for_db()
    Base.metadata.create_all(bind=engine)


app.include_router(auth_router)
app.include_router(user_router)
app.include_router(product_router)
app.include_router(cart_router)

@app.get("/")
def home():
    return {
        "message": "AnantBuy Backend Running"
    }   
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.security.oauth2 import get_current_user
from app.schemas.cart_schema import CartCreate

from app.services.cart_service import (
    add_to_cart,
    get_cart,
    delete_cart_item
)

router = APIRouter(
    prefix="/api/cart",
    tags=["Cart"]
)


@router.post("/")
def add_item(
    cart: CartCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return add_to_cart(
        db,
        current_user["user_id"],
        cart.product_id,
        cart.quantity
    )


@router.get("/")
def view_cart(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return get_cart(
        db,
        current_user["user_id"]
    )


@router.delete("/{cart_id}")
def remove_item(
    cart_id: int,
    db: Session = Depends(get_db)
):

    return delete_cart_item(
        db,
        cart_id
    )

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.security.roles import admin_required
from app.database.dependencies import get_db
from app.models.product import Product
from app.schemas.product_schema import ProductCreate
from app.services.product_service import (
    create_product,
    get_all_products,
    get_product_by_id,
    update_product,
    delete_product,
    search_products
)

router = APIRouter(
    prefix="/api/products",
    tags=["Products"]
)


@router.post("/")
@router.post("/")
def add_product(
    product: ProductCreate,
    db: Session = Depends(get_db),
    current_user=Depends(admin_required)
):

    new_product = Product(
    name=product.name,
    description=product.description,
    price=product.price,
    stock=product.stock,
    category=product.category,
    brand=product.brand,
    image_url=product.image_url,
    rating=product.rating
)

    return create_product(
        db,
        new_product
    )


@router.get("/")
def get_products(
    db: Session = Depends(get_db)
):

    return get_all_products(db)

@router.get("/search")
def search_product(
        name: str,
        db: Session = Depends(get_db)
):

    return search_products(
        db,
        name
    )

@router.get("/{product_id}")
def get_product(
    product_id: int,
    db: Session = Depends(get_db)
):

    product = get_product_by_id(
        db,
        product_id
    )

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    return product

@router.put("/{product_id}")
def update_existing_product(
        product_id: int,
        product: ProductCreate,
        db: Session = Depends(get_db),
        current_user=Depends(admin_required)
):

    updated_product = update_product(
        db,
        product_id,
        product
    )

    if not updated_product:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    return updated_product
@router.delete("/{product_id}")
def remove_product(
        product_id: int,
        db: Session = Depends(get_db),
        current_user=Depends(admin_required)
):

    deleted = delete_product(
        db,
        product_id
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    return {
        "message":
        "Product deleted successfully"
    }
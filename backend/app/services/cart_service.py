from app.models.cart import Cart


def add_to_cart(
    db,
    user_id,
    product_id,
    quantity
):
    cart_item = Cart(
        user_id=user_id,
        product_id=product_id,
        quantity=quantity
    )

    db.add(cart_item)
    db.commit()
    db.refresh(cart_item)

    return cart_item


def get_cart(
    db,
    user_id
):
    return (
        db.query(Cart)
        .filter(Cart.user_id == user_id)
        .all()
    )


def delete_cart_item(
    db,
    cart_id
):
    cart_item = (
        db.query(Cart)
        .filter(Cart.id == cart_id)
        .first()
    )

    if cart_item:
        db.delete(cart_item)
        db.commit()

    return {"message": "Cart item removed"}
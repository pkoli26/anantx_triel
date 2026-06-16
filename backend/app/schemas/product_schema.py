from pydantic import BaseModel


class ProductCreate(BaseModel):
    name: str
    description: str
    price: float
    stock: int
    category: str
    brand: str
    image_url: str
    rating: float


class ProductResponse(ProductCreate):
    id: int

    class Config:
        from_attributes = True
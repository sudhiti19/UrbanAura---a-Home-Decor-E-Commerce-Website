from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: int
    email: EmailStr

    class Config:
        orm_mode = True
class ProductBase(BaseModel):
    name: str
    description: str
    price: float
    image_url: str
    category: str

class ProductCreate(ProductBase):
    pass

class ProductOut(ProductBase):
    id: int

    class Config:
        orm_mode = True

from typing import List
from datetime import datetime

# OrderItem schema
class OrderItemCreate(BaseModel):
    product_id: int
    quantity: int
    price: float

class OrderItemOut(BaseModel):
    product_id: int
    quantity: int
    price: float

    class Config:
        orm_mode = True

class OrderCreate(BaseModel):

    items: list[OrderItemCreate]
    total_amount: float

class OrderOut(BaseModel):
    id: int
    user_id: int
    total_amount: float
    payment_status: str
    created_at: datetime
    items: list[OrderItemOut]

    class Config:
        orm_mode = True

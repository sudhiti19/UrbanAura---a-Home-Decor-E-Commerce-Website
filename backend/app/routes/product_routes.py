from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import schemas, crud
from ..database import get_db

router = APIRouter(prefix="/products", tags=["Products"])

@router.post("/", response_model=schemas.ProductOut)
def create_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
    return crud.products.create_product(db, product)

@router.get("/", response_model=list[schemas.ProductOut])
def get_products(db: Session = Depends(get_db), category: str = None):
    if category:
        return crud.products.get_products_by_category(db, category)
    return crud.products.get_all_products(db)

@router.get("/{product_id}", response_model=schemas.ProductOut)
def get_product(product_id: int, db: Session = Depends(get_db)):
    return crud.products.get_product_by_id(db, product_id)

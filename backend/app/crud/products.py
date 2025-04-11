from sqlalchemy.orm import Session
from .. import models, schemas

def create_product(db: Session, product: schemas.ProductCreate):
    db_product = models.Product(**product.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

def get_all_products(db: Session):
    return db.query(models.Product).all()

def get_products_by_category(db: Session, category: str):
    return db.query(models.Product).filter(models.Product.category == category).all()

def get_product_by_id(db: Session, product_id: int):
    return db.query(models.Product).filter(models.Product.id == product_id).first()

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import schemas, database
from ..crud import orders
from ..auth.auth_handler import get_current_user
from .. import models

router = APIRouter()

@router.post("/orders/", response_model=schemas.OrderOut)
def place_order(
    order: schemas.OrderCreate,
    db: Session = Depends(database.get_db),
    current_user: models.User = Depends(get_current_user)
):
    return orders.create_order(db, order, current_user)

@router.get("/orders/user/{user_id}", response_model=list[schemas.OrderOut])
def get_user_orders(user_id: int, db: Session = Depends(database.get_db)):
    return orders.get_orders_by_user(db, user_id)

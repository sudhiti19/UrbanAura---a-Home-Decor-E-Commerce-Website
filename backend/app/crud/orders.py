from sqlalchemy.orm import Session
from .. import models, schemas

def create_order(db: Session, order_data: schemas.OrderCreate,  current_user: models.User):
    order = models.Order(
        user_id=current_user.id,
        total_amount=order_data.total_amount,
        payment_status="pending"
    )
    db.add(order)
    db.flush()

    for item in order_data.items:
        order_item = models.OrderItem(
            order_id=order.id,
            product_id=item.product_id,
            quantity=item.quantity,
            price=item.price
        )
        db.add(order_item)

    db.commit()
    db.refresh(order)
    return order


def get_orders_by_user(db: Session, user_id: int):
    return db.query(models.Order).filter(models.Order.user_id == user_id).all()

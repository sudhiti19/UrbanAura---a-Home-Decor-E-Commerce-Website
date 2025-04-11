import React, { useEffect } from "react";
import { useCart } from "./CartContext";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartSidebar = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    increaseQty,
    decreaseQty,
    totalItems,
  } = useCart();

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);

  return (
    <>
      {isCartOpen && <div className="overlay" onClick={closeCart}></div>}

      <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
        <div className="cart-sidebar-header">
          <h2>Cart ({totalItems})</h2>
          <button onClick={closeCart} className="close-btn">
            <FaTimes className="close-icon" size={18} />
          </button>
        </div>

        <div className="cart-sidebar-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart-text">Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.img} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">{item.price}</p>
                  <div className="qty-buttons">
                    <button onClick={() => decreaseQty(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item)}>+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ✅ Sticky Checkout Button */}
        <div className="checkout-container">
          <Link to="/checkout" onClick={closeCart}>
            <button
              className="checkout-btn"
              disabled={cartItems.length === 0}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;

import React from "react";
import { useCart } from "./CartContext";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.replace(/[₹ ,]/g, "")) * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
     // 🔁 Replace with actual logged-in user ID from localStorage later

    const items = cartItems.map(item => ({
      product_id: item.id, // Ensure each cart item includes `id` from Product table
      quantity: item.quantity,
      price: parseFloat(item.price.replace(/[₹ ,]/g, ""))
    }));

    try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/orders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          total_amount: totalAmount,
          items
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Order placed successfully!");
        clearCart();
        console.log(data);
      } else {
        alert("Failed to place order");
        console.error(data);
      }
    } catch (err) {
      console.error("Order error:", err);
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="checkout-items">
            {cartItems.map((item, index) => (
              <li key={index} className="checkout-item">
                <img src={item.img} alt={item.name} className="checkout-img" />
                <div>
                  <p>{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: {item.price}</p>
                </div>
              </li>
            ))}
          </ul>

          <h3>Total: ₹ {totalAmount.toFixed(2)}</h3>

          <button className="pay-now-btn" onClick={handlePlaceOrder}>
            Pay Now
          </button>
          <p style={{ marginTop: "1rem", fontStyle: "italic", color: "gray" }}>
  * Payment processing coming soon. Orders are for demo purposes only.
</p>

        </>
      )}
    </div>
  );
};

export default Checkout;

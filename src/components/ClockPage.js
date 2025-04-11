import React from "react";
import { useParams } from "react-router-dom";
import "../styles.css";
import Header from "../components/Header";
import CartSidebar from "../components/CartSidebar";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../components/CartContext";
import Footer from "./Footer";
// Importing 8 different clock images
import clock1 from "../assets/clock1.jpg";
import clock2 from "../assets/clock2.jpg";
import clock3 from "../assets/clock3.jpg";
import clock4 from "../assets/clock4.jpg";
import clock5 from "../assets/clock5.jpg";
import clock6 from "../assets/clock6.jpg";
import clock7 from "../assets/clock7.jpg";
import clock8 from "../assets/clock8.jpg";

export const clocks = [
  { img: clock1, price: "₹399", name: "Vintage Wooden Wall Clock" },
  { img: clock2, price: "₹449", name: "Classic Roman Numeral Clock" },
  { img: clock3, price: "₹499", name: "Modern Black Minimal Clock" },
  { img: clock4, price: "₹599", name: "Luxury Brass Designer Clock" },
  { img: clock5, price: "₹649", name: "Rustic Farmhouse Style Clock" },
  { img: clock6, price: "₹699", name: "Silent Non-Ticking Clock" },
  { img: clock7, price: "₹749", name: "Decorative Wall Art Clock" },
  { img: clock8, price: "₹799", name: "Oversized Industrial Clock" },
];

const ClockPage = () => {
  const { categoryId } = useParams();
  const { addToCart } = useCart();

  return (
    <>
      <Header className="header-frame-page" barIconColor="#C0C0C0" /> {/* Silver/Grey tone for clocks */}
      <CartSidebar />

      <div className="products-container">
        <div className="products-grid">
          {clocks.map((clock, index) => (
            <div key={index} className="product-card">
              <img src={clock.img} alt="Clock" className="product-image" />
              <p className="product-name">{clock.name}</p>
              <div className="price-cart-container">
                <p className="product-price">{clock.price}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart({ ...clock, id: index + 1 })}>
                  <FaShoppingCart className="cart-icon" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ClockPage;

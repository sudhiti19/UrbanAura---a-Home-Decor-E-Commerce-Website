import React from "react";
import { useParams } from "react-router-dom";
import "../styles.css";
import Header from "../components/Header";
import CartSidebar from "../components/CartSidebar";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../components/CartContext";

// Importing 8 different candle images
import candle1 from "../assets/candle1.jpg";
import candle2 from "../assets/candle2.jpg";
import candle3 from "../assets/candle3.jpg";
import candle4 from "../assets/candle4.jpg";
import candle5 from "../assets/candle5.jpg";
import candle6 from "../assets/candle6.jpg";
import candle7 from "../assets/candle7.jpg";
import candle8 from "../assets/candle8.jpg";
import Footer from "./Footer";
export const candles = [
  { img: candle1, price: "₹299", name: "Scented Candle - Lavender Bliss" },
  { img: candle2, price: "₹349", name: "Vanilla Bean Aromatherapy Candle" },
  { img: candle3, price: "₹399", name: "Rose Petal Soy Wax Candle" },
  { img: candle4, price: "₹450", name: "Jasmine & Sandalwood Candle" },
  { img: candle5, price: "₹499", name: "Handmade Beeswax Pillar Candle" },
  { img: candle6, price: "₹549", name: "Cinnamon Spice Wooden Wick Candle" },
  { img: candle7, price: "₹599", name: "Ocean Breeze Decorative Candle" },
  { img: candle8, price: "₹699", name: "Luxury Gift Box Candle Set" },
];

const CandlePage = () => {
  const { categoryId } = useParams();
  const { addToCart } = useCart();

  return (
    <>
      <Header className="header-frame-page" barIconColor="#FFD700" /> {/* Gold-ish color for candles */}
      <CartSidebar />

      <div className="products-container">
        <div className="products-grid">
          {candles.map((candle, index) => (
            <div key={index} className="product-card">
              <img src={candle.img} alt="Candle" className="product-image" />
              <p className="product-name">{candle.name}</p>
              <div className="price-cart-container">
                <p className="product-price">{candle.price}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart({ ...candle, id: index + 1 })}>
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

export default CandlePage;

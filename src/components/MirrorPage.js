import React from "react";
import { useParams } from "react-router-dom";
import "../styles.css";
import Header from "../components/Header";
import CartSidebar from "../components/CartSidebar";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../components/CartContext";
import Footer from "./Footer";
// Importing 8 mirror images
import mirror1 from "../assets/mirror1.jpg";
import mirror2 from "../assets/mirror2.jpg";
import mirror3 from "../assets/mirror3.jpg";
import mirror4 from "../assets/mirror4.jpg";
import mirror5 from "../assets/mirror5.jpg";
import mirror6 from "../assets/mirror6.jpg";
import mirror7 from "../assets/mirror7.jpg";
import mirror8 from "../assets/mirror8.jpg";

export const mirrors = [
  { img: mirror1, price: "₹699", name: "Round Wooden Frame Mirror" },
  { img: mirror2, price: "₹799", name: "Vintage Oval Wall Mirror" },
  { img: mirror3, price: "₹899", name: "Sunburst Decorative Mirror" },
  { img: mirror4, price: "₹999", name: "Full-Length Standing Mirror" },
  { img: mirror5, price: "₹1,099", name: "Antique Brass Finish Mirror" },
  { img: mirror6, price: "₹1,199", name: "Frameless Beveled Mirror" },
  { img: mirror7, price: "₹1,299", name: "Modern Hexagonal Mirror" },
  { img: mirror8, price: "₹1,399", name: "LED Vanity Bathroom Mirror" },
];

const MirrorPage = () => {
  const { categoryId } = useParams();
  const { addToCart } = useCart();

  return (
    <>
      <Header className="header-frame-page" barIconColor="#B2B2B2" /> {/* light gray tone for mirrors */}
      <CartSidebar />

      <div className="products-container">
        <div className="products-grid">
          {mirrors.map((mirror, index) => (
            <div key={index} className="product-card">
              <img src={mirror.img} alt="Mirror" className="product-image" />
              <p className="product-name">{mirror.name}</p>
              <div className="price-cart-container">
                <p className="product-price">{mirror.price}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart({ ...mirror, id: index + 1 })}>
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

export default MirrorPage;

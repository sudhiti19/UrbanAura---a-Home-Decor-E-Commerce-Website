import React from "react";
import { useParams } from "react-router-dom";
import "../styles.css";
import Header from "../components/Header";
import CartSidebar from "../components/CartSidebar";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../components/CartContext";
import Footer from "./Footer";
// Importing 8 showpiece images
import show1 from "../assets/show1.jpg";
import show2 from "../assets/show2.jpg";
import show3 from "../assets/show3.jpg";
import show4 from "../assets/show4.jpg";
import show5 from "../assets/show5.jpg";
import show6 from "../assets/show6.jpg";
import show7 from "../assets/show7.jpg";
import show8 from "../assets/show8.jpg";

export const showpieces = [
  { img: show1, price: "₹299", name: "Miniature Elephant Figurine" },
  { img: show2, price: "₹349", name: "Glass Swan Decorative Piece" },
  { img: show3, price: "₹399", name: "Metallic Abstract Sculpture" },
  { img: show4, price: "₹449", name: "Resin Buddha Showpiece" },
  { img: show5, price: "₹499", name: "Wooden Horse Handicraft" },
  { img: show6, price: "₹549", name: "Marble Peacock Statue" },
  { img: show7, price: "₹599", name: "Vintage Gramophone Miniature" },
  { img: show8, price: "₹649", name: "Handcrafted Tribal Art Decor" },
];

const ShowPage = () => {
  const { categoryId } = useParams();
  const { addToCart } = useCart();

  return (
    <>
      <Header className="header-frame-page" barIconColor="#a0522d" />
      <CartSidebar />

      <div className="products-container">
        <div className="products-grid">
          {showpieces.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.img} alt="Showpiece" className="product-image" />
              <p className="product-name">{item.name}</p>
              <div className="price-cart-container">
                <p className="product-price">{item.price}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart({ ...item, id: index + 1 })}>
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

export default ShowPage;

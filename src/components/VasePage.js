import React from "react";
// import { useParams } from "react-router-dom";
import "../styles.css";
import Header from "../components/Header";
import CartSidebar from "../components/CartSidebar";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../components/CartContext";
import Footer from "./Footer";
// Importing 8 different vase images
import vase1 from "../assets/vase1.jpg";
import vase2 from "../assets/vase2.jpg";
import vase3 from "../assets/vase3.jpg";
import vase4 from "../assets/vase4.jpg";
import vase5 from "../assets/vase5.jpg";
import vase6 from "../assets/vase6.jpg";
import vase7 from "../assets/vase7.jpg";
import vase8 from "../assets/vase8.jpg";

export const vases = [
  { img: vase1, price: "₹299", name: "Modern Glass Vase" },
  { img: vase2, price: "₹349", name: "Ceramic Hand-Painted Vase" },
  { img: vase3, price: "₹399", name: "Vintage Copper Flower Vase" },
  { img: vase4, price: "₹449", name: "Textured Clay Table Vase" },
  { img: vase5, price: "₹499", name: "Tall Transparent Vase" },
  { img: vase6, price: "₹549", name: "Marble Finish Floor Vase" },
  { img: vase7, price: "₹599", name: "Decorative Woven Basket Vase" },
  { img: vase8, price: "₹649", name: "Geometric Pattern Ceramic Vase" },
];

const VasePage = () => {
  // const { categoryId } = useParams();
  const { addToCart } = useCart();

  return (
    <>
      <Header className="header-frame-page" barIconColor="#a0522d" />
      <CartSidebar />

      <div className="products-container">
        <div className="products-grid">
          {vases.map((vase, index) => (
            <div key={index} className="product-card">
              <img src={vase.img} alt="Vase" className="product-image" />
              <p className="product-name">{vase.name}</p>
              <div className="price-cart-container">
                <p className="product-price">{vase.price}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart({ ...vase, id: index + 1 })}>
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

export default VasePage;

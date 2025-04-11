import React from "react";
import { useParams } from "react-router-dom";
import "../styles.css"; 
import Header from "../components/Header"; 
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../components/CartContext"; 
import Footer from "./Footer";
import CartSidebar from "../components/CartSidebar"; 
// Importing 8 different frame images
import frame1 from "../assets/frame1.jpg";
import frame2 from "../assets/frame2.jpg";
import frame3 from "../assets/frame3.jpg";
import frame4 from "../assets/frame4.jpg";
import frame5 from "../assets/frame5.jpg";
import frame6 from "../assets/frame6.jpg";
import frame7 from "../assets/frame7.jpg";
import frame8 from "../assets/frame8.jpg";

export const frames = [
  { img: frame1, price: "₹ 199", name: "Sepia Allure Set of 2 Photo Frames" },
  { img: frame2, price: "₹ 249", name: "Classic Wooden Frame " },
  { img: frame3, price: "₹ 299", name: "Vintage Gold Metal Frame " },
  { img: frame4, price: "₹ 349", name: "Black Border Glass Frame " },
  { img: frame5, price: "₹ 399", name: "Rustic Brown Wooden Frame " },
  { img: frame6, price: "₹ 449", name: "Modern Acrylic Photo Frame " },
  { img: frame7, price: "₹ 499", name: "Decorative Patterned Frame " },
  { img: frame8, price: "₹ 599", name: "Luxury Designer Frame " },
];

const FramePage = () => {
  const { categoryId } = useParams();
  const { addToCart } = useCart(); 

  return (
    <>
    <Header className="header-frame-page" barIconColor="#a0522d" />
    <CartSidebar /> 

    <div className="products-container">
      
      <div className="products-grid">
        {frames.map((frame, index) => (
          <div key={index} className="product-card">
            <img src={frame.img} alt="Photo Frame" className="product-image" />
            
            <p className="product-name">{frame.name}</p>
            {/* Price and Add to Cart Button */}
            <div className="price-cart-container">
                <p className="product-price">{frame.price}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart({ ...frame, id: index + 1 })}>
                  <FaShoppingCart className="cart-icon"  size={20} />
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

export default FramePage;

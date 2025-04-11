import React from "react";
// import { useParams } from "react-router-dom";
import "../styles.css";
import Header from "../components/Header";
import CartSidebar from "../components/CartSidebar";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../components/CartContext";
import Footer from "./Footer";
// Importing 8 shelf images
import shelf1 from "../assets/shelf1.jpg";
import shelf2 from "../assets/shelf2.jpg";
import shelf3 from "../assets/shelf3.jpg";
import shelf4 from "../assets/shelf4.jpg";
import shelf5 from "../assets/shelf5.jpg";
import shelf6 from "../assets/shelf6.jpg";
import shelf7 from "../assets/shelf7.jpg";
import shelf8 from "../assets/shelf8.jpg";

export const shelves = [
  { img: shelf1, price: "₹799", name: "Modern Floating Wall Shelf" },
  { img: shelf2, price: "₹899", name: "Rustic Wooden Display Shelf" },
  { img: shelf3, price: "₹999", name: "Corner Triangle Shelf" },
  { img: shelf4, price: "₹1,099", name: "Metal Frame Wall Shelf Set" },
  { img: shelf5, price: "₹1,199", name: "Geometric Hexagon Shelf" },
  { img: shelf6, price: "₹1,299", name: "Ladder Style Bookshelf" },
  { img: shelf7, price: "₹1,399", name: "Multi-Tier Bamboo Shelf" },
  { img: shelf8, price: "₹1,499", name: "Industrial Pipe Wall Shelf" },
];

const ShelfPage = () => {
  // const { categoryId } = useParams();
  const { addToCart } = useCart();

  return (
    <>
      <Header className="header-frame-page" barIconColor="#a0522d" />
      <CartSidebar />

      <div className="products-container">
        <div className="products-grid">
          {shelves.map((shelf, index) => (
            <div key={index} className="product-card">
              <img src={shelf.img} alt="Shelf" className="product-image" />
              <p className="product-name">{shelf.name}</p>
              <div className="price-cart-container">
                <p className="product-price">{shelf.price}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart({ ...shelf, id: index + 1 })}>
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

export default ShelfPage;

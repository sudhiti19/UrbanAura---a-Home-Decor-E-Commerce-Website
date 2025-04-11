import React from "react";
import { useParams } from "react-router-dom";
import "../styles.css";
import Header from "../components/Header";
import CartSidebar from "../components/CartSidebar";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../components/CartContext";
import Footer from "./Footer";
// Importing 8 different plant/vase images
import plant1 from "../assets/plant1.jpg";
import plant2 from "../assets/plant2.jpg";
import plant3 from "../assets/plant3.jpg";
import plant4 from "../assets/plant4.jpg";
import plant5 from "../assets/plant5.jpg";
import plant6 from "../assets/plant6.jpg";
import plant7 from "../assets/plant7.jpg";
import plant8 from "../assets/plant8.jpg";

export const plants = [
  { img: plant1, price: "₹249", name: "Mini Succulent in Ceramic Pot" },
  { img: plant2, price: "₹299", name: "Artificial Bamboo Plant in Vase" },
  { img: plant3, price: "₹349", name: "Hanging Ivy Plant with Pot" },
  { img: plant4, price: "₹399", name: "Real Snake Plant in Clay Pot" },
  { img: plant5, price: "₹449", name: "Lavender Pot with Decorative Vase" },
  { img: plant6, price: "₹499", name: "Bonsai Tree in Glass Pot" },
  { img: plant7, price: "₹549", name: "Artificial Potted Cactus" },
  { img: plant8, price: "₹599", name: "Decorative Green Plant Set" },
];

const PlantPage = () => {
  const { categoryId } = useParams();
  const { addToCart } = useCart();

  return (
    <>
      <Header className="header-frame-page" barIconColor="#228B22" />
      <CartSidebar />

      <div className="products-container">
        <div className="products-grid">
          {plants.map((plant, index) => (
            <div key={index} className="product-card">
              <img src={plant.img} alt="Plant" className="product-image" />
              <p className="product-name">{plant.name}</p>
              <div className="price-cart-container">
                <p className="product-price">{plant.price}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart({ ...plant, id: index + 1 })}>
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

export default PlantPage;

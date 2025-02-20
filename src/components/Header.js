import React, { useState } from "react";
import "../styles.css";
import { HiBars3 } from "react-icons/hi2"; // Importing the hamburger icon

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        {/* Shop Button with Three-line Icon */}
        <button className="shop-button" onClick={toggleSidebar}>
        <HiBars3  size={20} />
          <span>SHOP</span>
        </button>

        <a href="#" className="name">UrbanAura</a>
        
        <nav className="navbar">
          <a href="#">LOGIN</a>
          <a href="#">CART</a>
        </nav>
      </header>

      {/* Sidebar for Home Décor Categories */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleSidebar}>×</button>
        <h3>Home Decor</h3>
        <ul>
          <li><a href="#">Wall Art</a></li>
          <li><a href="#">Lighting</a></li>
          <li><a href="#">Furniture</a></li>
          <li><a href="#">Rugs</a></li>
          <li><a href="#">Vases & Plants</a></li>
          <li><a href="#">Candles</a></li>
        </ul>
      </div>

      {/* Overlay when Sidebar is Open */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Header;

import React from "react";
import "../styles.css";

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="name">UrbanAura</a>
      <nav className="navbar">
        
        <a href="#">LOGIN</a>
        <a href="#">CART</a>
      </nav>
    </header>
  );
};

export default Header;

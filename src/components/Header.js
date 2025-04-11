import React, { useState, useEffect } from "react";
import "../styles.css";
import { HiBars3 } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const Header = ({ className = "", barIconColor = "#000" }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const navigate = useNavigate();
  const { cartItems, openCart, isCartOpen } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggingOut(true);
    setTimeout(() => {
      localStorage.removeItem("token");
      setIsLoggingOut(false);
      window.location.reload();
    }, 500);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = !isSidebarOpen ? "hidden" : "auto";
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const shouldHideNav = isCartOpen;

  return (
    <>
      <header className={`header ${className}`}>
        <button className="shop-button" onClick={toggleSidebar}>
          <HiBars3 size={20} style={{ color: barIconColor }} />
          <span className="shop-text">SHOP</span>
        </button>

        <a href="/" className="name urban-aura">UrbanAura</a>

        <nav className={`navbar ${shouldHideNav ? "hide-nav" : ""}`}>
          {isLoggedIn ? (
            <a href="#" onClick={handleLogout} className="auth-text logout">
              {isLoggingOut ? "Logging out..." : "LOGOUT"}
            </a>
          ) : (
            <a href="#" onClick={handleLoginClick} className="auth-text login">LOGIN</a>
          )}
          <a onClick={openCart} className="cart-text" style={{ cursor: "pointer" }}>
            CART
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </a>
        </nav>
      </header>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#">Furniture</a></li>
          <li><a href="#">Wall Art</a></li>
          <li><a href="#">Lighting</a></li>
          <li><a href="#">Rugs</a></li>
          <li><a href="/plants">Plants</a></li>
          <li><a href="/candles">Candles</a></li>
          <li><a href="/mirrors">Mirrors</a></li>
          <li><a href="/frames">Photo Frames</a></li>
          <li><a href="/showpieces">Showpieces</a></li>
          <li><a href="/clocks">Clocks</a></li>
          <li><a href="/vases">Vases</a></li>
        </ul>
      </div>

      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </>
  );
};

export default Header;

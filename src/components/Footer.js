import React from "react";
import "../styles.css";

const Footer = () => {
  return (
    <div className="footer-bottom">
      <p style={{ textAlign: "center", fontSize: "18px", color: "#37472b", marginTop: "15px" ,fontFamily: "Playfair Display serif"}}>
        &copy; 2025 UrbanAura.
      </p>
      <div className="footer-tp">
        <span>Terms</span>
        <span>Privacy</span>
      </div>
    </div>
  );
};

export default Footer;

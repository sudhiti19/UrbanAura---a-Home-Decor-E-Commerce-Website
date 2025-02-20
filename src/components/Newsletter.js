import React from "react";
import "../styles.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-left">
        <h2 className="newsletter-heading">
          Stay in the know by signing up to our newsletter!
        </h2>
        <div className="newsletter-input-box">
          <input type="email" placeholder="E-Mail Address" />
          <button className="newsletter-button">→</button>
        </div>
        <p className="newsletter-text">
          You can unsubscribe anytime. Check our privacy policy for more details.
        </p>
      </div>

      <div className="newsletter-right">
        <div className="footer-links">
          <div>
            <h4>Orders & Support</h4>
            <p>Shipping & Returns</p>
            <p>FAQ</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h4>About</h4>
            <p>Our Story</p>
            <p>Sustainability</p>
            <p>Responsibilities</p>
          </div>
          <div>
            <h4>Discover</h4>
            <p>Our Blog</p>
            <p>Best Sellers</p>
            <p>Custom Products</p>
          </div>
        </div>
        <div className="social-icons">
          <span>📸 @houseoflocals</span>
          <span>📧 contact@hol.com</span>
        </div>
        <p className="footer-text">© House of Locals 2023</p>
      </div>
    </div>
  );
};

export default Newsletter;

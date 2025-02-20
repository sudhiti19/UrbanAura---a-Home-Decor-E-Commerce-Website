import React from "react";
import "../styles.css";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Newsletter = () => {
  return (
    <footer className="newsletter-container">
      {/* Left Section */}
      <div className="newsletter-left">
        <h2 className="newsletter-heading">
          Stay in the know by signing up to our newsletter!
        </h2>
        <div className="newsletter-input-box">
          <input type="email" placeholder="E-Mail Address" aria-label="Email Address" />
          <button className="newsletter-button" aria-label="Subscribe">→</button>
        </div>
        <p className="newsletter-text">
          You can unsubscribe anytime. Check our privacy policy for more details.
        </p>
        
      </div>

      {/* Right Section */}
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

        {/* Social Media */}
        <div className="social-icons">
  <div className="social-item">
    <FaInstagram size={22} className="icon-fix" />
    <span className="social-text">@urbanaura</span>
  </div>
  <div className="social-item">
    <MdEmail size={20} className="icon-fix" />
    <span className="social-text">contact@urbaura.com</span>
  </div>
</div>
      </div>

      {/* Footer Bottom */}
      
      <div>
  {/* Your existing content */}
 
</div>
    </footer>
  );
};

export default Newsletter;

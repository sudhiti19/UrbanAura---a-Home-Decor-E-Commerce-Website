import React from "react";
import "../styles.css";
import customer1 from "../assets/customer1.jpg";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.jpg";

const reviews = [
  {
    name: "Sophia Carter",
    location: "New York, USA",
    img: customer1,
    title: "Amazing Quality!",
    text: "Absolutely love the craftsmanship. The best home decor I’ve ever purchased! The materials feel premium, and the attention to detail is impressive. I’ll be recommending this to all my friends!",
  },
  {
    name: "Aarav Mehta",
    location: "Mumbai, India",
    img: customer2,
    title: "Great Experience",
    text: "Fast delivery and top-notch quality. I was skeptical at first, but the product exceeded my expectations. It blends beautifully with my home decor. Will definitely order again!",
  },
  {
    name: "Emma Wilson",
    location: "London, UK",
    img: customer3,
    title: "Beautiful Products",
    text: "The design and colors are even better than expected. The craftsmanship is outstanding, and it adds an elegant touch to my space. 10/10 recommended for anyone who loves quality!",
  },
];

const CustomerReviews = () => {
  return (
    <div className="reviews-section">
      <h2 className="reviews-heading">See Why Customers Love Us</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="customer-info">
              <img src={review.img} alt={review.name} className="customer-img" />
              <div>
                <p className="customer-name">{review.name}</p>
                <p className="customer-location">{review.location}</p>
              </div>
            </div>
            <div className="star-rating">★★★★★</div>
            <h3 className="review-heading">{review.title}</h3>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
      </div>
      
  );
};
    
export default CustomerReviews;

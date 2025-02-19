import React from "react";
import "../styles.css";
import photoFrame from "../assets/photo-frame.avif";
import candle from "../assets/candle.jpg";
import clock from "../assets/clock.avif";
import plants from "../assets/plants.avif";
import vase from "../assets/vase.jpg";
import shelf from "../assets/shelf.avif";
import mirror from "../assets/mirror.jpg";
import showpiece from "../assets/show.jpeg";

const categories = [
  { name: "Photo Frames", img: photoFrame, id: "frame" },
  { name: "Candles", img: candle, id: "candle" },
  { name: "Clocks", img: clock, id: "clock" },
  { name: "Natural Plants", img: plants, id: "plant" },
  { name: "Vases", img: vase, id: "vase" },
  { name: "Wooden Shelves", img: shelf, id: "shelf" },
  { name: "Mirrors", img: mirror, id: "mirror" },
  { name: "Showpieces", img: showpiece, id: "show" },
];

const Categories = () => {
  return (
    <div className="categories-section">
  {/* Heading */}
  <h2 className="categories-heading">Our Bestsellers</h2>
    <div className="categories-table-container">
      <table className="categories-table">
        <tbody>
          <tr>
            {categories.slice(0, 4).map((category, index) => (
              <td key={index} className="category-cell">
                <a href={`#${category.id}`} className="category-link">
                  <img src={category.img} alt={category.name} className="category-img" />
                  <p className="category-name">{category.name}</p>
                </a>
              </td>
            ))}
          </tr>
          <tr>
            {categories.slice(4, 8).map((category, index) => (
              <td key={index} className="category-cell">
                <a href={`#${category.id}`} className="category-link">
                  <img src={category.img} alt={category.name} className="category-img" />
                  <p className="category-name">{category.name}</p>
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Categories;

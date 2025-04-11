import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import allProducts from "./allProducts";
import SearchBar from "./SearchBar";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery().get("q") || "";
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFiltered(results);
  }, [query]);

  return (
    <div>
      <SearchBar />
      <div className="product-grid">
        {filtered.length > 0 ? (
          filtered.map((product, idx) => (
            <div key={idx} className="product-card">
              <img src={product.img} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.price}</p>
            </div>
          ))
        ) : (
          <p style={{ marginTop: "2rem", textAlign: "center" }}>
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;

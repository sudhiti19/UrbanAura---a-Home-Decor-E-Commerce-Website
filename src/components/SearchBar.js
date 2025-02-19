import React from "react";
import { CiSearch } from "react-icons/ci"; 

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button type="submit" className="search-button">
      <CiSearch style={{ color: "green", fontSize: "28px" }} />
      </button>
    </div>
  );
};

export default SearchBar;

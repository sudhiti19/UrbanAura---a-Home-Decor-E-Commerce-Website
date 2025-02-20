import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import Reviews from "./components/CustomerReviews";
import "./styles.css";
import notbg from "./assets/notbg.jpg";
import Newsletter from "./components/Newsletter";
function App() {
  return (
    <main className="main">
      <Header />
      <div className="image-container">
      <img src={notbg} alt="decor" />

        <SearchBar />
      </div>
      <Categories />
      <Reviews/>
      <Newsletter/>
    </main>
  );
}

export default App;

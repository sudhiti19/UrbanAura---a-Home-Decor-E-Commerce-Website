import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import Reviews from "./components/CustomerReviews";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import FramePage from "./components/FramePage";
import CandlePage from "./components/CandlePage";
import CartSidebar from "./components/CartSidebar";
import ClockPage from "./components/ClockPage";
import PlantPage from "./components/PlantPage";
import VasePage from "./components/VasePage";
import ShelfPage from "./components/ShelfPage";
import MirrorPage from "./components/MirrorPage";
import ShowPage from "./components/ShowPage";
import ScrollToTop from "./components/ScrollToTop"; 
import Checkout from "./components/Checkout";

import "./styles.css";
import notbg from "./assets/notbg.jpg";
import { CartProvider } from "./components/CartContext"; // ✅ Import this

function HomePage() {
  return (
    <main className="main">
      <Header />
      <CartSidebar />
      <div className="image-container">
        <img src={notbg} alt="decor" />
        <SearchBar onSearch={() => {}}  />
      </div>
      <Categories />
      <Reviews />
      <Newsletter />

      <Footer />
    </main>
  );
}

function App() {
  return (
    <CartProvider> {/* ✅ Wrap everything inside CartProvider */}
    
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/searchresults" element={<SearchResults />} />
          <Route path="/frames" element={<FramePage />} />
          <Route path="/candles" element={<CandlePage />} />
          <Route path="/clocks" element={<ClockPage />} />
          <Route path="/plants" element={<PlantPage />} />
          <Route path="/vases" element={<VasePage />} />
          <Route path="/shelves" element={<ShelfPage />} />
          <Route path="/mirrors" element={<MirrorPage />} />
          <Route path="/showpieces" element={<ShowPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

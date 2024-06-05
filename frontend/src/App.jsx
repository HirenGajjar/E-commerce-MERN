import React from "react";
import Navbar from "../src/Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "../src/Pages/Shop";
import ShopCategory from "../src/Pages/ShopCategory";
import Product from "../src/Pages/Product";
import Cart from "../src/Pages/Cart";
import LoginSignup from "../src/Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Shop />} />
        <Route path="/men" element={<ShopCategory category="men" />} />
        <Route path="/women" element={<ShopCategory category="women" />} />
        <Route path="/kids" element={<ShopCategory category="kids" />} />
        <Route path="/product" element={<Product />} />
        <Route path=":productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

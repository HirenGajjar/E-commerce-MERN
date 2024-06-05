import React, { useState } from "react";
import "../../index.css";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { Link } from "react-router-dom";
function Navbar() {
  const [menu, setMenu] = useState("Shop");
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <p>ShopNow</p>
        </div>
        <ul className="nav-menu">
          <li onClick={() => setMenu("Shop")}>
            <Link className="Link" to="/">
              {" "}
              Shop
            </Link>{" "}
            {menu === "Shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("Men")}>
            <Link className="Link" to="/men">
              {" "}
              Men
            </Link>{" "}
            {menu === "Men" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("Women")}>
            <Link className="Link" to="/women">
              {" "}
              Women
            </Link>{" "}
            {menu === "Women" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("Kids")}>
            <Link className="Link" to="/kids">
              {" "}
              Kids
            </Link>{" "}
            {menu === "Kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <button>
            <Link className="Link" to="/login">
              Login
            </Link>
          </button>
          <Link className="Link" to="/cart">
            <img src={cart_icon} alt="Cart-Icon" />
          </Link>
          <div className="nav-cart-count"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

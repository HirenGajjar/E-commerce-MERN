import React from "react";
import "../../index.css";
import footer_icon from "../../Assets/logo_big.png";
import instagram_icon from "../../Assets/instagram_icon.png";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-10go">
          <img src={footer_icon} alt="" />
          <p>ShopNow</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Office</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
          <div className="footer-icons-container">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

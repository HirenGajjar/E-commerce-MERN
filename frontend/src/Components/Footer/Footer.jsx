import React from "react";
import "../../index.css";
import footer_icon from "../../Assets/logo_big.png";
import instagram_icon from "../../Assets/instagram_icon.png";
import pintrest_icon from "../../Assets/pintester_icon.png";
import whatsapp_icon from "../../Assets/whatsapp_icon.png";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
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
            <img src={instagram_icon} alt="Instagram" />
          </div>
          <div className="footer-icons-container">
            <img src={pintrest_icon} alt="Pintrest" />
          </div>
          <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="Whatsapp" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright &copy; 2024</p>
        </div>
      </div>
    </>
  );
}

export default Footer;

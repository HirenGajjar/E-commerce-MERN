import React from "react";
import "../../index.css";
function NewsLetter() {
  return (
    <>
      <div className="news-letter">
        <h1>Get exclusive offers!</h1>
        <p>Subscribe for more</p>
        <div>
          <input className="news-letter-input" type="email" placeholder="Subscribe on your email" />
          <button className="news-letter-sub-btn">Subscribe</button>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;

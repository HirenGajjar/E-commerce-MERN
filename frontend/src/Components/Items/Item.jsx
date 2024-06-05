import React from "react";
import "../../index.css";
function Item(props) {
  return (
    <>
      <div className="item">
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
          <div className="item-price-new">
            <p>${props.new_price}</p>
          </div>
          <div className="item-price-old">
            <p className="old-price-text">${props.old_price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;

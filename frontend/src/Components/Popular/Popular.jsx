import React from "react";
import data_product from "../../Assets/data";
import "../../index.css";
import Item from "../Items/Item";
function Popular() {
  return (
    <>
      <div className="popular">
        <h1>Popular for Women</h1>
        <hr />
        <div className="popular-item">
          {data_product.map((item, index) => {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Popular;

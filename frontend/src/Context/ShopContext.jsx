import React, { createContext } from "react";
import all_data from "../Assets/all_product";
export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
  const contextValue = { all_data };
  return (
    <ShopContextProvider value={contextValue}>
      {props.children}
    </ShopContextProvider>
  );
};

export default ShopContextProvider;

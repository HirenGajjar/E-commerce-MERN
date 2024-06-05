import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import "../index.css";
import NewCollection from "../Components/NewCollection/NewCollection";

function Shop() {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
    </>
  );
}

export default Shop;

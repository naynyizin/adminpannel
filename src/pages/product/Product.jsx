import React from "react";
import "./product.scss";
import Single from "../../components/single/Single";
import { singleProduct } from "../../data";

const Product = () => {
  //Fetch data and send to Single Component
  return (
    <div>
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;

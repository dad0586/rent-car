import React from "react";
import "./ProductCard.css";

const ProductCard = ({ name, price, image, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <span>${price}</span>
    </div>
  );
};

export default ProductCard;

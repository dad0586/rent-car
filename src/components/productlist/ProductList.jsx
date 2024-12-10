import React from "react";
import ProductCard from "../productcard/ProductCard";
import "./ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          name={product.name} 
          price={product.price} 
          image={product.image} 
        />
      ))}
    </div>
  );
};

export default ProductList;

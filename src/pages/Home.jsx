import React from "react";
import ProductList from "../components/ProductList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: products, loading, error } = useFetch("http://localhost:3000/products");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Our Cars</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;

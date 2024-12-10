import React from "react";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/herosection/HeroSection";
import ProductList from "../components/productlist/ProductList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: products, loading, error } = useFetch("http://localhost:3000/products");

  return (
    <>
      <Navbar />
      <HeroSection />
      <section id="products">
        <h2>Our Products</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && <ProductList products={products} />}
      </section>
    </>
  );
};

export default Home;

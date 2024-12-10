import React from "react";
import Icon from "../assets/icon";
import Search1 from "../components/search/search";
import "./main.scss"
import CarCard from "../components/card";



const car = {
  name: "Koenigsegg",
  type: "Sport",
  fuelCapacity: 90,
  transmission: "Manual",
  seatingCapacity: 2,
  price: 99,
};

const Home = () => {
  // const { data: products, loading, error } = useFetch("http://localhost:3000/products");

  return (
    <>
      <div className="navbar">
        <div>
          <Icon />
        </div>
        <div>
          <Search1 />
        </div>

      </div>
      <div className="header">
        <div style={{ display: "flex", padding: "20px" }}>
          <CarCard car={car} />
        </div>
      </div>
    </>
  );
};

export default Home;

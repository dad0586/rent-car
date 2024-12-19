import React from "react";
import "./main.scss";
import useFetch from "../../hooks/fetch";


const CarCard = ({ car }) => {

  const url = `http://localhost:3000/products`
  console.log(car); // data ni tekshirish





  return (
    <>
      <div className="container">
        <div className="car-card">
          <div className="car-card_title">
            <h2>{car?.name}</h2>
          </div>
          <div className="car-card_img">
            <img
              src={car?.image} alt="image"
            />
          </div>
          <div className="car-card_character">
            <p>90L</p>
            <p>Manual</p>
            <p>2 People</p>
          </div>
          <div className="car-card_buy">
            <p>20$/day</p>
            <button>Rent Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;

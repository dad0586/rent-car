import React from "react";
import "./main.scss";
import useFetch from "../../hooks/fetch";
import { Rate } from "antd";



const CarCard = ({ car }) => {

  const url = `http://localhost:3000/products`
  console.log(car); // data ni tekshirish





  return (
    <>
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
            <p>{car?.price}$/<span>day</span> </p>
            <button>Rent Now</button>
          </div>
          <div>
          <Rate allowHalf disabled value={car?.rating}/>
          </div>
        </div>
    </>
  );
};

export default CarCard;

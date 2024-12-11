import React from "react";
import "./main.scss";
import useFetch from "../../hooks/fetch";


const CarCard = ({ car }) => {

  const url = `http://localhost:3000/products`
console.log(car); // data ni tekshirish





  return (
    <div className="car-card">
      <div className="car-card__header">
        <h3 className="car-card__title">{car?.name}</h3>
        <p className="car-card__type">Type</p>
      </div>



      {/* Rasm uchun joy (Bo'sh qoldirilgan) */}

      
      <div className="car_image">
        <img
           src={car?.image} alt="image"
        />
      </div>




      <div className="car-card__details">
        <div className="car-card__info">
          <span>
            <i className="fa fa-gas-pump"></i> 10 L
          </span>
          <span>
            <i className="fa fa-users"></i> 2 People
          </span>
        </div>
        <div className="car-card__pricing">
          <h4>20$/day</h4>
          <button className="car-card__rent-btn">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

import React from "react";
import "./main.scss";

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <div className="car-card__header">
        <h3 className="car-card__title">{car.name}</h3>
        <p className="car-card__type">{car.type}</p>
        <div className="car-card__favorite">
          <i className="fa fa-heart" aria-hidden="true"></i>
        </div>
      </div>
      {/* Rasm uchun joy (Bo'sh qoldirilgan) */}
      <div className="car-card__image-placeholder"></div>
      <div className="car-card__details">
        <div className="car-card__info">
          <span>
            <i className="fa fa-gas-pump"></i> {car.fuelCapacity}L
          </span>
          <span>
            <i className="fa fa-cogs"></i> {car.transmission}
          </span>
          <span>
            <i className="fa fa-users"></i> {car.seatingCapacity} People
          </span>
        </div>
        <div className="car-card__pricing">
          <h4>${car.price}/day</h4>
          <button className="car-card__rent-btn">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

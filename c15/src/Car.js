import React from "react";

const carColors = ["red", "green", "blue", "yellow", "orange", "purple"];

const Car = ({ car: { brand, model, year }, onSelectCar }) => {
  return (
    <div
      onClick={() => onSelectCar(brand)}
      style={{ boxShadow: "2px 1px 3px #eee", padding: "10px" }}
    >
      <h3>{brand}</h3>
      <p>{model}</p>
      <p>{year}</p>
    </div>
  );
};

export default Car;

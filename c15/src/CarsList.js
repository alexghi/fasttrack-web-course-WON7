import React, { useState } from 'react';
import Car from './Car';

import { findCarByBrand, carsList } from './data/cars';

const CarsList = ({currentCar, setSelectedCar}) => {
    
    const onCarSelectedClick = (clickedBrand) => {
        setSelectedCar(
            findCarByBrand(clickedBrand)
        )
    }

    return (
        <div className="cars-list">
            <h2>Cars List</h2>
            <h3>{currentCar.brand} - {currentCar.model}</h3>
            {
                carsList.map((car, index) => {
                   return <Car
                        onSelectCar={onCarSelectedClick} 
                        key={index} 
                        car={car} 
                    /> 
                })
            }
        </div>
    )
}

export default CarsList;
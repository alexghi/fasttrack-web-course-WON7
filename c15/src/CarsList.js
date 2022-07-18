import React from 'react';
import Car from './Car';

const CarsList = (props) => {
    const { cars } = props;

    return (
        <div className="cars-list">
            <h2>Cars List</h2>
            {
                cars.map((car, index) => {
                   return <Car key={index} car={car} /> 
                })
            }
        </div>
    )
}

export default CarsList;
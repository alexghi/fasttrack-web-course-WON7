import React from 'react';

const CarsInService = ( {currentCar} ) => {
    return (
        <div>
            <h1>Car entered in service now:</h1>
            <div>{currentCar.brand}</div>
        </div>
    );
}

export default CarsInService
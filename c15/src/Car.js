import React from 'react';

const Car = (props) => {
    return <div>
        <h3>{props.car.brand}</h3>
        <p>{props.car.model}</p>
        <p>{props.car.year}</p>
    </div>
}

export default Car
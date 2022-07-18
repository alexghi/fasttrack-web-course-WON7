import React from 'react';

const carColors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];

const Car = (props) => {
    const { brand, model, year } = props.car

    return <div>
        <h3>{brand}</h3>
        <p>{model}</p>
        <p>{year}</p>

    </div>
}

export default Car
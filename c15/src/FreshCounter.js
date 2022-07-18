import React, { useState, useEffect } from 'react'

const FreshCounter = ( props ) => {
    const [count, setCount] = useState(0);
    const [stars, setStars] = useState(5);
     
    if( !props?.student?.details ) {
        return <div> fresh counter was initialized without student object </div>
    }
    // props.student.details.address
    const { details: { address: studentAdress } } = props.student;

    return (
        <div>
            <div>
                fresh counter sd: {studentAdress}
            </div>
            {count}
            <button onClick={() => {
                setCount(count + 1)
            }}>+</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>-</button>

            <button onClick={() => {
                setStars(stars + Math.ceil(Math.random() * 100))
            }}>Generate random stars</button>
        </div>
    )
}

export default FreshCounter;
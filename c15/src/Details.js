import React, { useState } from 'react'
import FreshCounter from './FreshCounter';
import StudentDetails, { StudentGrade as Grade } from './StudentDetails';

const Details = () => {
    return (
        <div style={{backgroundColor: 'aliceblue', fontSize: '22px', border: '1px solid #efefef'}}>
            <StudentDetails/>
            <FreshCounter student={{
                details: {
                    address: '123 Main St'
                }
            }}/>
        </div>
    )
}

export default Details;
import logo from './logo.svg';
import './App.css';
import CarsList from './CarsList';
import CarsInService from './CarsInService';
import Counter from './Counter';
import Details from './Details';
import FreshCounter from './FreshCounter';
import React, { useState } from 'react';
import { findCarByBrand } from './data/cars';

const initialCar = findCarByBrand('Ford');

function App() {
  const [selectedCar, setSelectedCar] = useState(initialCar);

  return (
    <>
      <CarsList currentCar={selectedCar} setSelectedCar={setSelectedCar}/>
      <CarsInService currentCar={selectedCar}/>
      {/* <Counter student={{
        name:'Ema',
        age: 25,
        details: {
          grade: 'A',
          school: 'School of Code',
          address: '123 Main St.'
        }
      }}/> */}
      {/* <FreshCounter student={{
        name:'Ema',
        age: 25,
        details: {
          grade: 'A',
          school: 'School of Code',
          address: '123 Main St.'
        }
      }}/> */}
      {/* <Details/> */}
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import CarsList from './CarsList';
import Counter from './Counter';
import Details from './Details';
import FreshCounter from './FreshCounter';

const carsList = [
  {
    brand: 'Ford',
    year: '2000',
    model: 'Focus'
  },
  {
    brand: 'Chevrolet',
    year: '2010',
    model: 'Corvette'
  },
  {
    brand: 'Volvo',
    year: '2012',
    model: 'V70'
  },
  {
    brand: 'BMW',
    year: '2015',
    model: 'X5'
  },
  {
    brand: 'Mercedes',
    year: '2017',
    model: 'C-Class'
  }
];

function App() {
  return (
    <>
      {/* <CarsList cars={carsList}/> */}
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
      <Details/>
    </>
  );
}

export default App;

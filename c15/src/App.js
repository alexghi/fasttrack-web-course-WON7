import logo from './logo.svg';
import './App.css';
import CarsList from './CarsList';

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
    <CarsList cars={carsList}/>
  );
}

export default App;

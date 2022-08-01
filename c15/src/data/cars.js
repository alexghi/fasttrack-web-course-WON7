export const carsList = [
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

export const findCarByBrand = ( brand ) =>{
  return carsList.find( car => car.brand === brand );
}
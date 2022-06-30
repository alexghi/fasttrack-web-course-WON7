/// destructrure
function getStudents() {
    return ['Ema', 'Roxana', 'Betti', 'Flavius', 'Emil'];
}

const [student1, student2] = getStudents();


function getFullDetailsStudent( ) {
    return {
        name: 'Ema',
        age: 12,
        phone: '1231231',
        address: {
            city: 'Bucuresti',
            street: 'Ciresilor'
        }
    }
}


const fullDetailsStudent = getFullDetailsStudent()
// console.log(fullDetailsStudent.address.city)


const { address } = getFullDetailsStudent()
const { city } = address

// console.log(city)


/// rest/spread operator
const names = ['Andrei', 'Emil', 'Flavius', 'Betti', 'Ema', 'Daniel']
const [firstStudent, secondStudent, ...allTheOtherStudents] = names

console.log(firstStudent, secondStudent)
console.log(allTheOtherStudents)


const car = {
    brand: 'volvo',
    color: 'gray',
    model: 's90',
    trim_level: 'inscription'
}

const { brand: manufacturer, color: carColor, ...allTheOtherCarDetails } = car 
console.log('brand', manufacturer)
console.log(allTheOtherCarDetails)


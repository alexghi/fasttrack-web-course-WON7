import { concat, capitalize } from 'lodash';

let students = ['ema', 'emil', 'claudia'];

const showStudents = ( ) => {
  return students
}


const capitalizedStudents = ( ) => {
    return students.map(( student ) => {
        return capitalize(student)
    })
}


const addMoreStudents = ( arrayToAdd ) => {
    return concat(students, arrayToAdd)
}

export { showStudents as AAA, addMoreStudents, capitalizedStudents } ;

export default students
var shoppingList = ['apa', 'paine', 'branza', 'capsuni', 'castraveti'];
var students = ['Georgiana', 'Ema', 'Andrei', 'Dragos', 'Matia'];
const note = [1, 2, 3, 4 ,5]
const firstItem = shoppingList[0]

const lastItem = shoppingList[shoppingList.length - 1]

// for(var i = 0; i < shoppingList.length; i++ ) {
//     console.log(shoppingList[i])
// }

shoppingList.forEach( 
    function(item, index) {
        // console.log(`${item} se afla pe pozitia ${index}`)
    }
)

const myShoppingList = shoppingList.map(
    function(item, index) {
        return `my: ${item}`
    }
)

// console.log(myShoppingList)


const doubledNotes = note.map(
    function(item) {
        return item * 2
    }
)

// console.log(note)
// console.log(doubledNotes)

// const filteredStudents = students.filter(
//     function(item) {
//         return ['Andrei', 'Dragos', 'Georgiana'].includes(item)
//     }
// )




try {
    nonExistentFunction();
  } 
  catch (error) {
      
    console.log(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
  



const itemToRemove = students.slice(2, 3)
console.log(itemToRemove)
console.log(students)


const myArray = ["Ana", "are", "mere"]
console.log(myArray.join('  -   '))

const mySentence = "Ana - are - mere"
console.log('splitted', mySentence.split(','))


var adult = true;
var x = 0

// if ul acesta 
if( adult ) {
    x = 1
}
else {
   x = 2
}

// e echivalent cu ternary operator de aici
adult ? x = 1 : x = 2


let myName = prompt("Please enter your name");

console.log(myName)

if( myName === 'Alex') {
    console.log('salutari')
}
else {
    console.log('nu te cunosc')
}
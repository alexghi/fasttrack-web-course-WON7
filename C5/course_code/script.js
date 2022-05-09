var age = 20;
var money = '20';

console.log(age == money)

// var myName = `Alex 123`;
// var yourName = myName;

// myName = "Paula";
// var age = 30;

// primitives
// console.log(typeof myName)
// console.log(typeof age)
// console.log(undefined)

var anotherVar = null;

// objects
var sum = function (a, b) {
    return a + b
    // console.log('inside fn result', myResult)
}

const wheels = sum(2, 2)
// console.log(`wheels, ${wheels}`)

const myEyes = sum(1, 1)
// console.log(myEyes)

var myAddress = {
    street: 'Ciresilor',
    hometown: "Oradea",
    country: `RO`,
    population: 17000000
}
var myArray = [1, 2, 3, 4, 5];

// console.log(typeof myAddress)
// console.log(typeof myArray)
// console.log(typeof sum)

var adult = true;

if( adult ) {
    var myOtherName = "Alex"
    
    let age = 39;
    age = "something you shouldn't know"
    // console.log('heeeere', age)
    
    const eyes = 2
    // eyes = "brown"
    // console.log(eyes)
}

// console.log(myOtherName)
// console.log(age)
// console.log(eyes)
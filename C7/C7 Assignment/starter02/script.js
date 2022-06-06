'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive');

//const interface = 'Audio';
//const private = 534;
*/

/*
//FUNCTIONS

function logger() {
    console.log ('My name is Andrew');
}


//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log (appleOrangeJuice);

const num = Number('23');
*/


/*
//FUNCTION DECLARATIONS 
const age1 = calcAge1(1991);


function calcAge1(birthYear) {
    return 2037 - birthYear;

}


//FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/


//FUNCTION EXPRESSION
//const calcAge2 = function (birthYear) {
//    return 2037 - birthYear;
//}

/*
//ARROW FUNCTION

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
//FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
    return fruit * 5;
};

function fruitProcessor(apples, oranges) {
    
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces (oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
};

console.log(fruitProcessor(2, 3));
*/

/*
//REVIEWING FUNCTIONS

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
   
   
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

/*
//CODING CHALLENGE

//1
const calcAverage = (a, b, c)=> (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//2
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

//3.
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/


//DOM MANIPULATION























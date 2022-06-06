/* COURSE 1
let js = 'amazing';
if(js === 'amazing') alert ('JavaScript is super fucking fun');

40 + 8 + 78 - 32;
console.log(40 + 8 + 78 - 32);


let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);

let country = 'Romania'
let continent = 'Europa'
let population = '15 Mil'
console.log(country);
console.log(continent);
console.log(population)
*/

/*COURSE 2
let javaScriptIsFun = true;


console.log(javaScriptIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'Jonas');

javaScriptIsFun = 'WTF!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

//const birthYear = 1991;
//birthYear = 1990;


var job = 'programmer';
job = 'teacher';

lastName = 'watdafak';
console.log(lastName);
*/


//CODING CHALLENGE 1
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
*/

/*
const firstName = 'Andrei'
const job = 'watdafak'
const birthYear = 1995;
const year = 2037;
const andrei = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old '
 + job + '!';
 console.log(andrei)

 const andreiNew = `I'm ${firstName}, a ${year - birthYear}
 years old ${job}!`;
 console.log(andreiNew)

 console.log('String with \n\
 multiple \n\
 lines');

 console.log(`String
 multiple
 lines`);
 */


 //TAKING DECISIONS
/*
 const age = 25;
 
 if(age >= 18) {
    console.log('Mirel can start driving courses ✔👀');
 } else {
    const yearsLeft = 18 - age;
    console.log(`Mirel, you are too fucking young . Wait another ${yearsLeft}
     years :)`);
 }

 const birthYear = 1995;
 let century;
 if (birthYear <=2000) {
     century = 20;
 } else {
     century = 21;
 }
 console.log(century)
 */

 /*
 //CONDING CHALLENGE 2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIJohn, BMIMark);
console.log(`Mark's BMI is fucked-er (${BMIMark}) than John's! (${BMIJohn})`)
if(BMIJohn > BMIMark) {
    console.log("John, you're sooooo fucked bro")
} else {
    console.log("Maark, you're still fat as fuck bro")
}
*/

/*
//TYPE CONVERSION

const inputYear = '1995';
console.log(Number(inputYear));
console.log (Number(inputYear) + 18);

console.log(Number('WAAAT?'));
console.log(typeof NaN);

console.log (String(23), 23);


//TYPE COERCION

console.log('I am ' + 23 + ' years old');
console.log('I am ' + String(23) + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');

let n = '1' + 1; // '11'
n = n-1;         // 11-1
console.log(n);
*/

/*
// 5 FALSY VALUES: 0, '', undefined, null, NaN

console.log(Boolean (0));
console.log(Boolean (undefined));
console.log(Boolean ('waat'));
console.log(Boolean ({}));
console.log(Boolean (''));

const money = 0;
if(money) {
    console.log("You're rich as fuuuck");
} else {
    console.log("You're kind of fucked!");
}

let height;
if(height){
    console.log('fuuuuuck')
} else {
    console.log('shiiiit is UNDEFINED')
}
*/

/*
//EQUALITY OPERATORS

const age = '18';
if(age === 18) console.log("You're a hot girl(strict)");
if(age == 18) console.log("You're a hot girl(loose)");

const favourite = Number(prompt("What's you favourite number?"));
console.log(favourite);

if (favourite === 23) {
    console.log ('wtf!!!that is an amazing number');
} else if(favourite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log ('Number is not 23 or 7');
}

if (favourite !== 23) console.log ('why the fuck not?')
*/

/*
//LOGICAL OPERATORS   - BOOLEAN VALUES

const hasDriversLicense = true; //a
const hasGoodVision = true; //b

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log (!hasDriversLicense);

//const shouldDrive = hasDriversLicense && hasGoodVision;
// if(hasDriversLicense && hasGoodVision){
//     console.log('Sarah can drive')

// } else {
//     console.log('That bitch is blind as a bat, wtf bro');
// }

const isTired = false;    //c
console.log(hasDriversLicense || hasGoodVision || isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
 console.log('Sarah is able to fucking drive')
    
} else {
console.log('That bitch is blind as a bat, wtf bro');
 }
*/


//CONDING CHALLENGE
// const scoreDolphins1 = 96;
// const scoreDolphins2 = 108;
// const scoreDolphins3 = 89;

// const scoreKoalas1 = 88;
// const scoreKoalas2 = 100;
// const scoreKoalas3 = 110
// if(scoreDolphins1 + scoreDolphins2 + scoreDolphins3 > scoreKoalas1 + scoreKoalas2 + 
//     scoreKoalas3){
//        console.log('Dolphins are the best of the fucking best')

//     } else if (scoreDolphins1 + scoreDolphins2 + scoreDolphins3 < scoreKoalas1 + scoreKoalas2 + 
//         scoreKoalas3) {
//             console.log('Koalas are the fucking winners')
//         } else if (scoreDolphins1 + scoreDolphins2 + scoreDolphins3 === scoreKoalas1 + scoreKoalas2 + 
//             scoreKoalas3) {
//                 console.log ("You're both pussies")
//             }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

/*
//BONUS 1 - AVERAGE

const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log ('Dolphins win the trophy')
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log ('Koalas win the trophy')
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log ("You're both loosers!!!")
} else {
    console.log ("Once again, you're both fucking idiots")
}
*/

/*
//SWITCH STATEMENT

const day = 'wednesday';

switch(day){   // day === 'monday"
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break
        case 'tuesday':
            console.log('Prepare theory videos');
            break;
            case 'wednesday':
                case 'thursday':
                console.log('Write code examples');
                break;;
                case 'friday':
                    console.log('record videos')
                break;
                    case 'saturday':
                        case 'sunday':
                            console.log('enjoy the weekend')
                        break;
                        default:
                            console.log('not a valid day')
}

if(day === 'monday') {
     
} else if (day === 'tuesday'){

}else if (day === 'wednesday' || day === 'thursday') {

}else if (day === 'friday') {

}else if (day === 'saturday' || day === 'sunday'){

}else {

}
*/

/*
//expressions

3 + 4
1995
true && false && !false


if(23>10) {
    const str = '23 is bigger;'   //statement
}

console.log (`I'm ${2037 - 1991} years old.`)
*/

/*
//CONDITIONAL OPERATOR (TERNARY)


const age = 23;
//age >= 18 ? console.log('I like to drink') :
//console.log ("I'm not old enogh to fucking drink");

const drink = age >= 18 ? 'wine' : 'water';
console.log (drink);

let drink2;
if (age >=18) {
    drink2 = 'wine';
} else {
    drink2 = 'water'
}
console.log (drink2);

console.log (`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


//TIP CALCULATOR
let bill = 40;
let tip = bill >=50 && bill <=300 ? bill * 0.15 :
bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip}
, and the total value ${bill + tip}`);
*/






















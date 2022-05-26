//==== ASSIGNMENT #1
let myMovie = prompt("What is your favorite movie?");
let myAge = prompt("What is your age?");
console.log(myAge);
let myNum = Number(myAge);
console.log(myNum);

if(myNum > 16) {
    console.log(`You are eligible. Your age is ${myNum}`)
} else {
    console.log(`You must be at least 16 years old. It seems you are ${myNum}`);
}


//==== ASSIGNMENT #2
let opr = prompt("Please insert an operator!");
console.log(opr);
let num1 = prompt("Please insert a number!");
console.log(num1);
let num2 = prompt("Please insert a second number!");
console.log(num2);

let realNum1 = Number(num1);
console.log(realNum1);
console.log(typeof(realNum1));
let realNum2 = Number(num2);
console.log(realNum2);
console.log(typeof(realNum2));

if(opr == "/") {
    let result = realNum1 / realNum2;
    console.log(`${realNum1} ${opr} ${realNum2} = ${result}`);
}
if(opr == "*") {
    let result = realNum1 * realNum2;
    console.log(`${realNum1} ${opr} ${realNum2} = ${result}`);
}
if(opr == "+") {
    let result = realNum1 + realNum2;
    console.log(`${realNum1} ${opr} ${realNum2} = ${result}`);
}
if(opr == "-") {
    let result = realNum1 - realNum2;
    console.log(`${realNum1} ${opr} ${realNum2} = ${result}`);
}

var result = '';
switch(realNum1, opr, realNum2) {
    case opr = "+": let result = realNum1 + realNum2;
    console.log(`${realNum1} ${opr} ${realNum2} = ${result}`);
}

//==== ASSIGNMENT #3
let yourName = prompt("What is your name?");
console.log(yourName);
let yourAge = prompt("What is your age?");
console.log(yourAge);
let date = new Date();
console.log(date);
let thisYear = date.getFullYear();
console.log(date.getFullYear());
let yourBirthYear = thisYear - yourAge;
console.log(yourBirthYear);

console.log(`Hello, ${yourName}, I am only a console, but it is nice to meet you. I’ve heard you are ${yourAge} of age, that means you are born in ${yourBirthYear}.`)
document.getElementById('test').innerHTML = `Hello, ${yourName}, I am only a console, but it is nice to meet you. I’ve heard you are ${yourAge} of age, that means you are born in ${yourBirthYear}.`;

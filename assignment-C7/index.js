// Build a console program - 1

let myFavmovie = prompt("What's your favorite movie?");console.log(myFavmovie);

let myAge = prompt("How old are you?");
let myAgeAnswer = Number(myAge);console.log(myAgeAnswer);
if(myAgeAnswer > 16){
    console.log("You are eligible")
}

//Build a console program - 2

let operator = prompt ("Pick your operator(+, -, /, *)");console.log(operator);
let firstnumber = Number (prompt("Enter your first number"));console.log(firstnumber);
let secondnumber = Number (prompt("Enter your second number"));console.log(secondnumber);
switch (operator){
    case "+":
        console.log(`${firstnumber} + ${secondnumber} = ${firstnumber + secondnumber}`);
    break;
    case "-":
        console.log(`${firstnumber} - ${secondnumber} = ${firstnumber - secondnumber}`);
        break;
    case "*":
        console.log(`${firstnumber} * ${secondnumber} = ${firstnumber * secondnumber}`);
        break;
    case "/":
        console.log(`${firstnumber} / ${secondnumber} = ${firstnumber / secondnumber}`);
        break;
}

//Build a console program – 3 (extra mile)

let yourName = prompt("What is your name?")
let age = prompt("How old are you?")
let year = new Date().getFullYear();
console.log(`Hello ${yourName} I am only a console but it's nice to meet you. I've heard you are ${age} of age,
that means you were born in ${year - age}`)

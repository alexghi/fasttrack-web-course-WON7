//1. favorite movie displayer
const favoriteMovie = prompt("What's your favorite movie?");
console.log(favoriteMovie);
//2. age count eligible
const ageCount = prompt("What's your age?");
const ageCountSanitizer = Number(ageCount);
console.log(ageCountSanitizer);

ageCountSanitizer > 16 ? console.log("You are eligible") : console.log(`you must be at least 16 years old. It seems you are ${ageCountSanitizer}`);

//3. calculator 

const operator = prompt("Choose the operator from this list(+,-,*,/)");
const leftOperand = Number(prompt("enter your first number"));
const rightOperand = Number(prompt("enter your second number"));

switch (operator){
    case "+":
        console.log(`${leftOperand} + ${rightOperand} = ${leftOperand + rightOperand}`);
        break;
    case "-":
        console.log(`${leftOperand} - ${rightOperand} = ${leftOperand - rightOperand}`);
        break;
    case "*":
        console.log(`${leftOperand} * ${rightOperand} = ${leftOperand * rightOperand}`);
        break;
    case "/":
        console.log(`${leftOperand} / ${rightOperand} = ${leftOperand / rightOperand}`);
        break;
        default:
            console.log("The arithmetic operator is not valid")
}

//4. Build a console program – 3 (extra mile)

var fullName = prompt("what's your name?");
const age = prompt("What's your age?");
const year = new Date().getFullYear();
console.log(`Hello ${fullName} I'm only a console but it's nice to meet you.
I've heard you are ${age} of age, that means you were born in ${year - age}`);
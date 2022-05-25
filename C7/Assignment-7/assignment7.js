// Build a console program - 1

const favoriteMovie = prompt("What's your favorite movie?");
console.log("My favorite movie is " + favoriteMovie);

const age = prompt("How old are you?");
console.log(age);
console.log(Number(age));
if (age > 16) {
  console.log("You are eligible");
} else {
  console.log("You must be at least 16 years old. It seems you are " + age);
}
// Build a console program - 2

const operator = prompt("enter an arithmetic operator(+;-;*;/)");
const firstNum = Number(prompt("enter first number"));

const secondNum = Number(prompt("enter second number"));

if (operator === "+") {
  console.log(firstNum + " + " + secondNum + " = " + (firstNum + secondNum));
} else if (operator === "-") {
  console.log(firstNum + " - " + secondNum + " = " + (firstNum - secondNum));
} else if (operator === "*") {
  console.log(firstNum + " * " + secondNum + " = " + (firstNum * secondNum));
} else if (operator === "/") {
  console.log(firstNum + " / " + secondNum + " = " + (firstNum / secondNum));
} else {
  console.log("Invalid arithmetic operator");
}

//or

switch (operator) {
  case "+":
    console.log(firstNum + " + " + secondNum + " = " + (firstNum + secondNum));
    break;
  case "-":
    console.log(firstNum + " - " + secondNum + " = " + (firstNum - secondNum));
    break;
  case "*":
    console.log(firstNum + " * " + secondNum + " = " + (firstNum * secondNum));
    break;
  case "/":
    console.log(firstNum + " / " + secondNum + " = " + (firstNum / secondNum));
    break;
  default:
    console.log("Invalid arithmetic operator");
}

// Build a console program – 3 (extra mile)

const yourName = prompt("What's your name?");
alert("Hello " + yourName);
const yourAge = prompt("How old are you?");
const currentYear = new Date().getFullYear()
console.log(
  "Hello " + yourName + " I'm only a console but it's nice to meet you."
);
alert(
  "I've heard you are " + yourAge + " of age, that means you were born in" + (currentYear - yourAge) 
);

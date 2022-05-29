
// Exercitiul1

// let age = prompt("What is your age?", "Enter age here");
// let text;
// if(age>=16){
//     console.log ("you are eligible")
// }else{
//     console.log(`you must be at least 16 years old. It seems you are ${age}`)
// }



// EXERCITIUL2

// let operator = prompt("Enter an operator");
// let nr1 = Number(prompt("Enter the first number"));
// let nr2 = Number(prompt("Enter the second number"));

// let rezultat;

// switch(operator){
//     case "+" :
//         rezultat = nr1 + nr2;
//         break;

//     case "-":
//         rezultat = nr1 - nr2;
//         break;

//     case "*":
//         rezultat = nr1 * nr2;
//         break;

//     case "/":
//         rezultat = nr1 / nr2;
//         break;
// }

// console.log(`${nr1} ${operator} ${nr2} = ${rezultat}`);


// Exercitiul 3

let nume = prompt("Enetr your name")
let age = prompt("Enter your age")

let an = new Date()
console.log(`Hi ${nume}, I'm only a console but it's nice to meet you.
 I've heard you are ${age} of age, that means you were born in ${an.getFullYear() - age}`);
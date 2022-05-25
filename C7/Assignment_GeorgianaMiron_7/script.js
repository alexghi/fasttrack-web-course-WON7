//1.

let nume = prompt('What’s your name?');
let question = prompt (`${nume} what’s your favorite movie?`);

let age = Number(prompt(`OK ${nume}! Now enter your age!`));

if (age >= 16) {
  alert(`Great ${nume} You are eligible!`);
}else {
  alert(`Hey! You're too young! ${nume} you must be at least 16 years old!`);
}


//2. 

let calc = prompt(`Now ${nume} you need to choose an operator: +, -, *, /`);

let first_number = Number(prompt(`${nume} you need to choose the first number`));
let second_number = Number(prompt(`${nume} you need to choose the second number`));

if(calc == '+'){
  alert(first_number + second_number);
}else if (calc == '-'){
  alert(first_number - second_number);
}else if (calc == '*'){
  alert(first_number * second_number);
}else if (calc == '/'){
  alert(first_number / second_number);
}else {
  alert(`${nume} please be more careful , you have inserted an invalid operator.`)
}


//3.

let yourName = prompt(`${nume} What is your full name?`);
let yourAge = prompt(`${yourName} Please, I need your age again!`);

alert(`Thanks ${nume}! Click on OK!`);
console.log(`${yourName}! I'm only a console but it's nice to meet you.HaHa!!!`);


//4.

let today = new Date();
let ageYear = today.getFullYear() - yourAge;

console.log(`I've heard you are ${yourAge} years old ,which means you were born in ${ageYear}. 
Tell me I said okay? I know I said OK! REMEMBER? I'm a console, hahahahaha!`);

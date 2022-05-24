//1.
var movie = window.prompt("What's your favorite movie?")
//document.write("My favorite movie is " + movie);
console.log("My favorite movie is", movie)


//2.
var age = Number(prompt("Enter your age, bro"))

if(age >= "18") {
    //alert("Congrats! You are eligible, bro")
    console.log("You are eligible")
} else{
    //alert("You must be at least 18 years old. Sorry, not sorry:))")
    console.log("You're just too young bro, seriously. You have only " + age + " years. ")
}

//3.

var calculate = prompt("Choose an operator:+, -, /, or *");

var left_operand = Number(prompt("Choose the first number bro"));

var right_operand = Number(prompt("Choose the second number"));

    if(calculate == "+"){
    console.log(left_operand + right_operand);
} else if(calculate == "-") {
    console.log(left_operand - right_operand);
} else if(calculate == "/") {
    console.log(left_operand / right_operand);
} else if(calculate == "*") {
    console.log(left_operand * right_operand);
} else {
    alert("C'mon bro, you have inserted an invalid operator. Eh, what can you do, this things happen");
}

//4. Extra, extra.....read all about it

var yourName = prompt("What is your God given name?")
var age = prompt("Bro, what is your age? FYI, if you're a lady, you don't have to be upset 'cause I asked you that, ok?")

console.log("Hello " + yourName + ". I'm only a console but it's nice to meet you.")

var date = new Date();
var yourAge = date.getFullYear() - age;
console.log("I've heard you are " + age + ", which means you were born in " + yourAge + ". You can call me Nostradamus.")
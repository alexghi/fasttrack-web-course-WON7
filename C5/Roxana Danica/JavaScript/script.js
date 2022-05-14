//1. Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
var myFunction = function (a, b) {
    return a+b;
}

// console.log(myFunction(5,3));

//2. Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
// Comparison operators, strict equality
var myFunction2 = function (a, b){
    if (a===b) {
        return true;
    }
    return false;
}

//console.log (myFunction2(5,"5"))

//3. Write a function that takes a value as argument
// Return the type of the value
var myFunction3 = function (a){
    return typeof a;
}

//console.log(myFunction3(5==6))

//4. write a function that takes as argument a number,
// a string, and an object
// display the values of the primitives (excluding the object)
var myFunction4 = function (a){
    return 
    //  nu inteleg cerinta
}

//5. write a Student class that has a constructor with
// name (will be a String), age (will be a Number), hobbies (will be an Array of Strings) e.g. ["Music", "Travel"]
// create a method name `greeting` that returns the sentence: Hello my name is {name} and I'm {age}.
class Student {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    greeting = function() {
        return `Hello my name is ${this.name} and I'm ${this.age}`;
    }
}

//var Roxi = new Student("Roxana",21, ["music", "reading", "movies"]) ;

//console.log(Roxi.greeting());

//console.log(Roxi);


//6. write a Teacher class that has a constructor with
// name (will be a String), age (will be a Number)

class Teacher {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

// var Trandafir = new Teacher ("Trandafir", 42);
// console.log(Trandafir);

//7. create two students (instances) of the class defined at 5
// console log their greetings

Andrei = new Student("Andrei", 20, ["reading", "cooking", "biking"] );
Sergiu = new Student("Sergiu", 19, ["sports", "gaming", "hiking"] );

console.log(Andrei.greeting());
console.log(Sergiu.greeting());

//1. Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
var myFunction1 = function (a, b) {
    var sum = a + b;
    return sum;
}
console.log(myFunction1(3, 4));


//2. Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
// Comparison operators, strict equality
var myFunction2 = function (a, b){
    if(a === b) {
        return true;
    }
}
console.log(myFunction2(10, 10));


//3. Write a function that takes a value as argument
// Return the type of the value
var myFunction3 = function (a){
    return typeof a;
}

let apple = "apple";

console.log(myFunction3(apple));

// or console.log(`My ${apple} is a ${myFunction3(apple)}`);



//4. write a function that takes as argument a number,
// a string, and an object
// display the values of the primitives (excluding the object)
var myFunction4 = function (a, b, c){
    return [a, b];
}

var myObject = {
    name: "Adam",
    age: 21
}

console.log(myFunction4(13, "Clarissa", myObject));

//5. write a Student class that has a constructor with
// name (will be a String), age (will be a Number), hobbies (will be an Array of Strings) e.g. ["Music", "Travel"]
// create a method name `greeting` that returns the sentence: Hello my name is {name} and I'm {age}.
class Student {
    constructor({name, age, hobbies}){
        this.name = name;
        this.age = age;
        this.hobbie = hobbies;
    }
    greeting(){
        console.log(`Hello my name is ${this.name} and I'm ${this.age}.`)
    }

}

let student1 = new Student({
    name: "Feodor Dostoievski",
    age: 21,
    hobbies: ["writing", "socialist meetings", "reading Gogol"]
});
student1.greeting();

//6. write a Teacher class that has a constructor with
// name (will be a String), age (will be a Number)
class Teacher {
    constructor(name, age){
        this.name = name;
        this.age = age;
        return {name, age};
    }
}
let teacher1 = new Teacher("Descartes", 45);
console.log(teacher1);

//7. create two students (instances) of the class defined at 5
// console log their greetings

let student2 = new Student({
    name: "Hermann Hesse",
    age: 22,
    hobbies: ["being a lone wolf", "making music", "writing"]
});

let student3 = new Student({
    name: "Thomas Mann",
    age: 23,
    hobbies: ["mountain hiking", "family business", "Feodor Dostoievski"]
});

student2.greeting();
student3.greeting();

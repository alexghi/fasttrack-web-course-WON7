//1. Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
var myFunction = function (a, b) {
  return a + b;
};
console.log(myFunction(2, 3));

// or Arrow function:
const myFunction = (a, b) => a + b;
console.log(myFunction(3, 4));

//2. Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
// Comparison operators, strict equality
var myFunction2 = function (a, b) {
  return a === b;
};
console.log(myFunction2(3, 3));
console.log(myFunction2(4, "4")); //false

//3. Write a function that takes a value as argument
// Return the type of the value
var myFunction3 = function (a) {
  return typeof a;
};
console.log(myFunction3(3));
console.log(myFunction3("Betti"));
console.log(myFunction3([1, 2, 5, 7]));
console.log(myFunction3());

//4. write a function that takes as argument a number,
// a string, and an object
// display the values of the primitives (excluding the object)

var myFunction4 = function (a) {
  if (typeof a === "string" || typeof a === "number") {
    return a;
  } else {
    return "";
  }
};
console.log(myFunction4("Hello"));
console.log(myFunction4(10));
console.log(myFunction4([1]));

//5. write a Student class that has a constructor with
// name (will be a String), age (will be a Number), hobbies (will be an Array of Strings) e.g. ["Music", "Travel"]
// create a method name `greeting` that returns the sentence: Hello my name is {name} and I'm {age}.

class Student {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
  greeting() {
    return `Hello my name is ${this.name} and I'm ${this.age}.`;
  }
}

let classmate = new Student("John", 27, ["bicycle", "music", "basketball"]);
console.log(classmate.greeting());

//6. write a Teacher class that has a constructor with
// name (will be a String), age (will be a Number)

class Teacher {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let myTeacher = new Teacher("Sarah", 36);
console.log(myTeacher);

//7. create two students (instances) of the class defined at 5
// console log their greetings

let classmate2 = new Student("Charlotte", 26, ["dance", "read"]);
console.log(classmate2.greeting());

let classmate3 = new Student("Thomas", 30, ["footbal", "music"]);
console.log(classmate3.greeting());

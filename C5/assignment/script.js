//1. Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
var myFunction = function (a, b) {
  return a + b;
};
console.log(myFunction(2, 4));

//2. Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
// Comparison operators, strict equality
var myFunction2 = function (a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

console.log(myFunction2(2, 2));

//3. Write a function that takes a value as argument
// Return the type of the value
var myFunction3 = function (a) {
  return typeof a;
};

let actor = "Keanu Reeves";

console.log(myFunction3(actor));

//4. write a function that takes as argument a number,
// a string, and an object
// display the values of the primitives (excluding the object)
var myFunction4 = function (number, string, object) {
  console.log(number);
  console.log(string);
  console.log(object.age);
};
myFunction4(12, "Mircea", { name: "mircea", age: 22 });

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
    console.log(`Hello my name is ${this.name} and I am ${this.age}`);
  }
}

var myStudent = new Student("Popescu Andrei", 22, ["Reading", "Music"]);
console.log(myStudent.greeting());

//6. write a Teacher class that has a constructor with
// name (will be a String), age (will be a Number)

class Teacher {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//7. create two students (instances) of the class defined at 5
// console log their greetings

var myStudent2 = new Student("Mihaela Hurez", 21, ["Movies", "Hiking"]);
var myStudent3 = new Student("Marius Velescu", 22, ["Tennis", "Chess"]);

console.log(myStudent2.greeting());
console.log(myStudent3.greeting());

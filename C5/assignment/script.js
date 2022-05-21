//1. Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
var myFunction = function (a, b) {
  let sum = a + b;
  return sum;
  // sau return a + b;
};

//2. Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
// Comparison operators, strict equality
var myFunction2 = function (a, b) {
  if (typeof a === typeof b) {
    return true;
  }
};

//3. Write a function that takes a value as argument
// Return the type of the value
var myFunction3 = function (a) {
  return typeof a;
};

console.log(myFunction3(3));
console.log(myFunction3("Hello"));
console.log(myFunction3([1, 2, 5, 7]));

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
console.log(myFunction4("Hello World"));
console.log(myFunction4(10));
console.log(myFunction4([5]));

//5. write a Student class that has a constructor with
// name (will be a String), age (will be a Number), hobbies (will be an Array of Strings) e.g. ["Music", "Travel"]
// create a method name `greeting` that returns the sentence: Hello my name is {name} and I'm {age}.
class Student {
  constructor({ name, age, hobbies }) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
  greeting() {
    console.log(`Hello my name is ${this.name} and I'm ${this.age}`);

    // console.log(this.name);
  }
}

let studentOne = new Student({
  name: "John Doe",
  age: 24,
  hobbies: ["music", "swim", "read"],
});

studentOne.greeting();

//6. write a Teacher class that has a constructor with
// name (will be a String), age (will be a Number)

class Teacher {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let myTeacher = new Teacher("John", 26);
console.log(myTeacher);

//7. create two students (instances) of the class defined at 5
// console log their greetings

let studentTwo = new Student({
  name: "Johny Abc",
  age: 28,
  hobbies: ["read", "run", "drive"],
});

let studentThree = new Student({
  name: "Anne Doe",
  age: 18,
  hobbies: ["play", "read", "swim"],
});

studentTwo.greeting();
studentThree.greeting();

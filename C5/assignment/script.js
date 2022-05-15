//1. Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
var myFunction = function (a, b) {
    return a + b
}
console.log(myFunction(3,2))

//2. Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
// Comparison operators, strict equality
var myFunction2 = function (a, b){
        return a === b;
    }
console.log(myFunction2 (11,11))
console.log(myFunction2 (7, "7"))
console.log(myFunction2(8, "opt"))
console.log(myFunction2(9,10))



//3. Write a function that takes a value as argument
// Return the type of the value
var myFunction3 = function (a){
    return typeof a
};

console.log(myFunction3(1))

//4. write a function that takes as argument a number,
// a string, and an object
// display the values of the primitives (excluding the object)
var myFunction4 = function (a){
    return 
}

/* Aici nu sunt sigur ca inteleg assignment-ul, probabil voi avea nevoie sa intreb la curs. */

//5. write a Student class that has a constructor with
// name (will be a String), age (will be a Number), hobbies (will be an Array of Strings) e.g. ["Music", "Travel"]
// create a method name `greeting` that returns the sentence: Hello my name is {name} and I'm {age}.
class Student {
  constructor (name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    }

    getgreeting (){
        return `Hello my name is ${this.name} and I'm ${this.age}.`; 
    }
}

var elev1 = new Student ("Emil", 27, ["movies", "music", "sport"])
console.log(elev1.getgreeting())  

//6. write a Teacher class that has a constructor with
// name (will be a String), age (will be a Number)

class Teacher {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  var myTeacher = new Teacher("Alex", 38);
  console.log(myTeacher);

//7. create two students (instances) of the class defined at 5
// console log their greetings

let elev2 = new Student("Ion", 20, ["hiking", "writing", "opera"]);
console.log(elev2.getgreeting());

let elev3 = new Student("Mihai", 23, ["cars", "food", "poetry"]);
console.log(elev3.getgreeting());
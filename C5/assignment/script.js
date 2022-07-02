//1. Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
var myFunction = function (a, b) {
<<<<<<< HEAD
    return a + b
}
console.log(myFunction(3,2))
=======
  return a + b;
};
console.log(myFunction(2, 4));
>>>>>>> master

//2. Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
// Comparison operators, strict equality
<<<<<<< HEAD
var myFunction2 = function (a, b){
        return a === b;
    }
console.log(myFunction2 (11,11))
console.log(myFunction2 (7, "7"))
console.log(myFunction2(8, "opt"))
console.log(myFunction2(9,10))

=======
var myFunction2 = function (a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};
>>>>>>> master

console.log(myFunction2(2, 2));

//3. Write a function that takes a value as argument
// Return the type of the value
<<<<<<< HEAD
var myFunction3 = function (a){
    return typeof a
};

console.log(myFunction3(1))
=======
var myFunction3 = function (a) {
  return typeof a;
};

<<<<<<< HEAD
let actor = "Keanu Reeves";

console.log(myFunction3(actor));
=======
console.log(myFunction3(typeof "keanu reeves"));
>>>>>>> master
>>>>>>> 12eb0bb61f4c3aab5191109cff3538a6ad9100f9

//4. write a function that takes as argument a number,
// a string, and an object
// display the values of the primitives (excluding the object)
var myFunction4 = function (number, string, object) {
  console.log(number);
  console.log(string);
  console.log(object.age);
};
myFunction4(12, "Mircea", { name: "mircea", age: 22 });

/* Aici nu sunt sigur ca inteleg assignment-ul, probabil voi avea nevoie sa intreb la curs. */

//5. write a Student class that has a constructor with
// name (will be a String), age (will be a Number), hobbies (will be an Array of Strings) e.g. ["Music", "Travel"]
// create a method name `greeting` that returns the sentence: Hello my name is {name} and I'm {age}.
class Student {
<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD
console.log(myStudent.greeting());
=======
var greeting = function () {
  return "Hello my name is " + myStudent.name + " and I am " + myStudent.age;
};
console.log(greeting());
>>>>>>> master
>>>>>>> 12eb0bb61f4c3aab5191109cff3538a6ad9100f9

//6. write a Teacher class that has a constructor with
// name (will be a String), age (will be a Number)

class Teacher {
<<<<<<< HEAD
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  var myTeacher = new Teacher("Alex", 38);
  console.log(myTeacher);
=======
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
>>>>>>> master

//7. create two students (instances) of the class defined at 5
// console log their greetings

<<<<<<< HEAD
let elev2 = new Student("Ion", 20, ["hiking", "writing", "opera"]);
console.log(elev2.getgreeting());

let elev3 = new Student("Mihai", 23, ["cars", "food", "poetry"]);
console.log(elev3.getgreeting());
=======
var myStudent2 = new Student("Mihaela Hurez", 21, ["Movies", "Hiking"]);
var myStudent3 = new Student("Marius Velescu", 22, ["Tennis", "Chess"]);

<<<<<<< HEAD
console.log(myStudent2.greeting());
console.log(myStudent3.greeting());
=======
console.log("Hello, my name is " + myStudent2.name + " and I am " + myStudent2.age);
console.log("Hello, my name is " + myStudent3.name + " and I am " + myStudent3.age);
>>>>>>> master
>>>>>>> 12eb0bb61f4c3aab5191109cff3538a6ad9100f9

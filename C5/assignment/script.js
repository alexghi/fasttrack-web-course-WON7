//1. Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
<<<<<<< HEAD
var myFunction1 = function (a, b) {
    var sum = a + b;
    return sum;
}
console.log(myFunction1(3, 4));

=======
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
>>>>>>> 7a1799ff2b8c165459614750083ad9699429a4fd

//2. Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
// Comparison operators, strict equality
<<<<<<< HEAD
var myFunction2 = function (a, b){
<<<<<<< HEAD
    if(a === b) {
        return true;
    }
}
console.log(myFunction2(10, 10));
=======
        return a === b;
    }
console.log(myFunction2 (11,11))
console.log(myFunction2 (7, "7"))
console.log(myFunction2(8, "opt"))
console.log(myFunction2(9,10))
>>>>>>> 7a1799ff2b8c165459614750083ad9699429a4fd

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
<<<<<<< HEAD
    return typeof a;
}
=======
    return typeof a
};

console.log(myFunction3(1))
=======
var myFunction3 = function (a) {
  return a;
};

console.log(myFunction3(typeof "keanu reeves"));
>>>>>>> master
>>>>>>> 7a1799ff2b8c165459614750083ad9699429a4fd

let apple = "apple";

console.log(myFunction3(apple));

// or console.log(`My ${apple} is a ${myFunction3(apple)}`);



//4. write a function that takes as argument a number,
// a string, and an object
// display the values of the primitives (excluding the object)
<<<<<<< HEAD
var myFunction4 = function (a, b, c){
    return [a, b];
}
=======
var myFunction4 = function (a) {
  return a;
};

console.log(myFunction4(1));
console.log(myFunction4("this is a string"));
myFunction4({ type: "Audi", model: "r8", year: "2016" });

/* Aici nu sunt sigur ca inteleg assignment-ul, probabil voi avea nevoie sa intreb la curs. */
>>>>>>> 7a1799ff2b8c165459614750083ad9699429a4fd

var myObject = {
    name: "Adam",
    age: 21
}

console.log(myFunction4(13, "Clarissa", myObject));

//5. write a Student class that has a constructor with
// name (will be a String), age (will be a Number), hobbies (will be an Array of Strings) e.g. ["Music", "Travel"]
// create a method name `greeting` that returns the sentence: Hello my name is {name} and I'm {age}.
class Student {
<<<<<<< HEAD
    constructor({name, age, hobbies}){
        this.name = name;
        this.age = age;
        this.hobbie = hobbies;
    }
    greeting(){
        console.log(`Hello my name is ${this.name} and I'm ${this.age}.`)
=======
<<<<<<< HEAD
  constructor (name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
>>>>>>> 7a1799ff2b8c165459614750083ad9699429a4fd
    }

    getgreeting (){
        return `Hello my name is ${this.name} and I'm ${this.age}.`; 
    }
}

<<<<<<< HEAD
let student1 = new Student({
    name: "Feodor Dostoievski",
    age: 21,
    hobbies: ["writing", "socialist meetings", "reading Gogol"]
});
student1.greeting();
=======
var elev1 = new Student ("Emil", 27, ["movies", "music", "sport"])
console.log(elev1.getgreeting())  
=======
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}

var myStudent = new Student("Popescu Andrei", 22, ["Reading", "Music"]);
var greeting = function () {
  return "Hello my name is " + myStudent.name + " and I am " + myStudent.age;
};
console.log(greeting());
>>>>>>> master
>>>>>>> 7a1799ff2b8c165459614750083ad9699429a4fd

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
=======
<<<<<<< HEAD
let elev2 = new Student("Ion", 20, ["hiking", "writing", "opera"]);
console.log(elev2.getgreeting());

let elev3 = new Student("Mihai", 23, ["cars", "food", "poetry"]);
console.log(elev3.getgreeting());
=======
var myStudent2 = new Student("Mihaela Hurez", 21, ["Movies", "Hiking"]);
var myStudent3= new Student("Marius Velescu", 22 , ["Tennis" , "Chess"]);

console.log("Hello, my name is " + myStudent2.name + " and I am " + myStudent2.age);
console.log("Hello, my name is " + myStudent3.name + " and I am " + myStudent3.age);
>>>>>>> master
>>>>>>> 7a1799ff2b8c165459614750083ad9699429a4fd

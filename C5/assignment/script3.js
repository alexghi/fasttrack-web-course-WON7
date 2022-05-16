//1. Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
//var myFunction = function (a, b) {
//    return 
//}

function addition (a, b) {
    
    return a+b;
}
console.log (addition(1,2));

//2. Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
// Comparison operators, strict equality
//var myFunction2 = function (a, b){
//    return 
//}


 const age = 11;
 const money = '11'
 console.log(age === money);

 //3. Write a function that takes a value as argument!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Return the type of the value
//var myFunction3 = function (a){
//    return 
//}

//var type = function(a){!!!!AICI NU MI-A IESIT DELOC. AM INCERCAT MAI MULTE VARIANTE!!!!!!!!!!!!!!!1
    
 //   return typeof 'a'
//}

//4. write a function that takes as argument a number,
// a string, and an object
// display the values of the primitives (excluding the object)
//var myFunction4 = function (a){  !!!!!!NICI AICI!!!
 //   return 
//}

//4. write a function that takes as argument a number,
// a string, and an object
// display the values of the primitives (excluding the object)
var myFunction4 = function (a){
    return 
}

//5. write a Student class that has a constructor with
// name (will be a String), age (will be a Number), hobbies (will be an Array of Strings) e.g. ["Music", "Travel"]
// create a method name `greeting` that returns the sentence: Hello my name is {name} and I'm {age}.


class Student {
    constructor (name, age, hobbies){
      this.name = name;
      this.age = age;
      this.hobbies = hobbies;  
    }
getGreeting(){
    return "Hello, my name is " + this.name + " and I'm " + this.age;
}
}
  
let Charlie = new Student("Charlie", 27, ["driving", "hunting"]);
let Mirel = new Student("Mirel", 30, ["drinking", "partying"]);
let Mirela = new Student("Mirela", 23, ["clubbing"]);
    console.log(Charlie.getGreeting())
    console.log(Mirel.getGreeting())
    console.log(Mirela.getGreeting())
 
    //6. write a Teacher class that has a constructor with
// name (will be a String), age (will be a Number)
  
        
    
    class Teacher {
        constructor(name1, age1){
        this.name = name1;
        this.age = age1;
    }
    }
let Necula = new Teacher("Necula", 54);

console.log(Teacher)

//7. create two students (instances) of the class defined at 5
// console log their greetings

//!!!!!Am creat in plus 2 studenti la ex. 5 pt aceasta tema!!!!!!!!!!!!

//1. Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
var myFunction = function (a, b) {
    return a + b;
}
var a = 1000;
var b = 2500;
console.log(myFunction(a, b));
document.getElementById("test1").innerHTML = `myFunction calculează suma variabilelor a și b, care este  ${myFunction(a, b)}`;


//2. Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
// Comparison operators, strict equality
var myFunction2 = function (a, b){
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
console.log(myFunction2(a, b));

//3. Write a function that takes a value as argument
// Return the type of the value
var c = '5';
var myFunction3 = function (c){
    return typeof(c);
}
console.log(myFunction3(c));
document.getElementById("test3").innerHTML = `myFunction3 identifies the type of "var c", which is a ${myFunction3(c)}`;

//4. write a function that takes as argument a number,
// a string, and an object
// display the values of the primitives (excluding the object)
var num = 1;
var str = "artist";
var obj = {
    name: "Kandinski",
    century: 19,
    movement: "expressionism",
    hobbies: ['drawing', 'painting']
}
var myFunction4 = function (num, str, obj){
    // return typeof(f);
    return `The values I used as myFunction4 arguments are: ${num}, ${str}, ${obj.name}, ${obj.century}, ${obj.movement}, ${obj.hobbies[1]}.`;
}
console.log(myFunction4(num, str, obj));
document.getElementById("test4").innerHTML = myFunction4(num, str, obj);

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
        return `Hello! My name is <b> ${this.name} </b> and I am <b> ${this.age} </b>. I love <b>${this.hobbies}</b>. `;
    }    
}


// var Bruce = new Student("Bruce", 21, ['singing', 'hiking']);
var Bruce = new Student ({
    name: "Bruce",
    age: 21,
    hobbies: 'singing'
});
Bruce.greeting();
// !!! DIN PACATE, Bruce.greeting() nu imi apre in HTML cum trebuie. Nu pricep de ce.
document.getElementById("test5").innerHTML = Bruce.greeting();

var Luke = new Student("Luke", 21, ['singing', ' hiking']);
console.log(Luke);
Luke.greeting();
document.getElementById("test6").innerHTML = Luke.greeting();


//6. write a Teacher class that has a constructor with
// name (will be a String), age (will be a Number)
class Teacher {
    constructor({name, age}){
        this.name = name;
        this.age = age;    
    }
}

var Joe = new Teacher({
    name: "Joe",
    age: 55
})

//7. create two students (instances) of the class defined at 5
// console log their greetings


//=============

class Book {
    constructor({title, author, pubDate}) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
    }
    greetings() {
    // console.log(`
    // Title: ${this.title}
    // By: ${this.author}
    // ${this.pubDate}
    // `);
    return `You should read "${this.title}", by ${this.author}, ${this.pubDate}.`
    }
    }
    var YDKJS = new Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    pubDate: "June 2014",
    });
    YDKJS.greetings();
    document.getElementById("test7").innerHTML = YDKJS.greetings();

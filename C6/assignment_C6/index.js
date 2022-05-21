class Student {
    constructor({name, phone_number, age, hobbies}){
        this.name = name;
        this.phone_number = phone_number;
        this.age = age;
        this.hobbies = hobbies;
    }
    greetings(){
        console.log(`Hello my name is ${this.name} and I'm ${this.age} age.`)
    }
    getHobbies(){
        console.log(this.hobbies);
    }
    setHobbies(newHobbies){
        this.hobbies = newHobbies;
        console.log(this.hobbies);
    }
}

const student1 = new Student ({
    name: "John Doe",
    phone_number: 0751,
    age: 23,
    hobbies: ["skydiving"]
});

console.log(student1);
student1.greetings();
student1.getHobbies();
student1.setHobbies("camping");

var studentName = ["Sharleen Rollo", "Della Wally", "Ryana Ami", "Lydia Mercy", 
"Mikey Valorie", "Chester Lexie", "Danette Luanna", "Adalyn Goddard", "Johnnie Peta", "Natille Nigellus"];
var phoneNumbers = [
    0741664085,
    0751874118,
    0749854567,
    0747854567,
    0745678965,
    0756432123,
    0754334543,
    0765432122,
    0798675454,
    0765455433

    ];
var age = [25, 24, 25, 34, 21, 22, 24, 25, 22, 20];
var hobbies = ["skydiving", "reading", "cycling", "music", "workout", "music", "books", "walks", "reading", "books"];
const allStudents = [];

for(let i = 0; i < studentName.length; i++){
    allStudents[i] = new Student({name :studentName[i], phone_number: phoneNumbers[i],
         age: age[i], hobbies: hobbies[i]
});
    console.log(allStudents[i]);
    allStudents[i].getHobbies();
}

for(let i = 0; i < allStudents.length; i++) {
    if (allStudents[i].hobbies == "music" || allStudents[i].hobbies == "books"){
        allStudents[i].greetings();
    }
}

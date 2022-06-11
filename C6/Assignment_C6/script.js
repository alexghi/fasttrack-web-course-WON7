<<<<<<< HEAD
class Student{
    constructor(name, phoneNumber, age, hobbies){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.age = age;
        this.hobbies = hobbies;
    }

    getHobbies(){
        return this.hobbies;
    }

    setHobbies(newHobbies){
        return this.hobbies = newHobbies;
    }

    greetings(){
        return `Hello, my name is ${this.name} and I am ${this.age} of age`
    }
}

let student1 = new Student("Angelina Jolie" , "0723111222" , 22, ["Reading" , "Music"]);
console.log(student1);

console.log(student1.greetings());
student1.setHobbies(["Tennis" , "Skydiving"])
console.log(student1.getHobbies());


let students = ["Sharleen Rollo" , "Della Wally" , "Ryana Ami" , "Lydia Mercy" , "Mikey Valorey" , "Chester Lexie" , "Danette Luanna", "Adalyn Goddard" , "Johhnie Peta" , "Natille Nigellus"];
let phone = ["0724582333", "0724582334", "0724582335", "0724582336", "0724582337", "0724582338", "0724582339", "0724582331", "0724582332", "0724582330"]
let age = [22, 19, 20 ,23, 25, 21, 24, 22, 25, 23]
let hobbies = [["swimming" , "music"], ["skydiving" , "science"], ["programming", "engineering"] , ["history", "gaming"] , ["arts" , "painting"], ["music", "books"], ["french" , "writing"] , ["music", "books"], ["music" , "books"], ["travelling" , "handball"]]
let allStudents = []




for(i = 0 ; i<students.length ; i++){
    allStudents[i] = new Student(students[i], phone[i] , age[i] , hobbies[i]);
    console.log(allStudents[i]) 
}

=======
class Student {
  constructor({ name, phone_number, age}) {
    this.name = name;
    this.phone_number = phone_number;
    this.age = age;
  }

  greetings() {
    console.log(`Hello my name is ${this.name} and I'm ${this.age} of age.`);
  }


  setHobbies(newHobbies) {
    this.hobbies = newHobbies;
  }

  getHobbies() {
    return this.hobbies;
  }

}

let studentOne = new Student({
  name: "Sharleen Rollo",
  age: 24,
});

studentOne.greetings();
// studentOne.getHobbies();
// studentOne.setHobbies("music");


let studentName = [
  "Sharleen Rollo",
  "Della Wally",
  "Ryana Ami",
  "Lydia Mercy",
  "Mikey Valorie",
  "Chester Lexie",
  "Danette Luanna",
  "Adalyn Goddard",
  "Johnnie Peta",
  "Natille Nigellus",
];

let phone = [
  "0741234569",
  "0741234369",
  "0741535569",
  "0731230569",
  "0731234561",
  "0731234562",
  "0731234563",
  "0731234564",
  "0731234565",
  "0731234566",
];

let age = [20, 30, 24, 25, 21, 22, 25, 23, 28, 31];
let hobbies = ["swiming", "reading", "walking", "skydiving", "music", "books"];

const allStudents = [];

for (let i = 0; i < studentName.length; i++) {
  allStudents[i] = new Student({
    name: studentName[i],
    phone_number: phone[i],
    age: age[i],
    hobbies: hobbies[i],
  });

  console.log(allStudents[i]);
  allStudents[i].getHobbies();

}


for( let i = 0; i < allStudents.length; i++ ){
  if ( allStudents[i].hobbies == "music" || allStudents[i].hobbies == "books"){
    console.log(allStudents[i].greetings());
  }
}
>>>>>>> c48da9fcac0613d76fed2e3dd5fc90d5a061694b

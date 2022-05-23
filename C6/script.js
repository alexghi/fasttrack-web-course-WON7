 class Student {
  constructor(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  set age(age) {
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set hobbies(hobbies) {
    this._hobbies = hobbies;
  }

  get hobbies() {
    return this._hobbies;
  }

  greetings() {
    console.log(`Hello, my name is ${this.name} and I'm ${this._age} of age.`)
   }

}

const person = new Student("Betti", "0748473625");
person.age = 27;
console.log(person.age);
person.hobbies = ["travel", "tennis", "basketball", "music", "dance"];
console.log(person.hobbies);
console.log(person);

const students = [
  {
    name: "Sharleen Rollo",
    phone_number: "0745345789",
    age: 22,
    hobbies: ["hiking", "basketball"],
  },
  {
    name: "Della Wally",
    phone_number: "0749846352",
    age: 20,
    hobbies: ["camping", "kayaking"],
  },
  {
    name: "Ryana Ami",
    phone_number: "07598710293",
    age: 28,
    hobbies: ["parkour", "running", "fishing"],
  },
  {
    name: "Lydia Mercy",
    phone_number: "0740649387",
    age: 27,
    hobbies: ["hunting", "cooking"],
  },
  {
    name: "LMikey Valorie",
    phone_number: "0749847396",
    age: 26,
    hobbies: ["music", "books"],
  },
  {
    name: "Chester Lexie",
    phone_number: "0749483746",
    age: 25,
    hobbies: ["painting", "dancing"],
  },
  {
    name: "Danette Luanna",
    phone_number: "0749954218",
    age: 30,
    hobbies: ["diving", "bowling"],
  },
  {
    name: "Adalyn Goddard",
    phone_number: "07404736948",
    age: 25,
    hobbies: ["music", "darts", "books"],
  },
  {
    name: "Johnnie Peta",
    phone_number: "0740984573",
    age: 23,
    hobbies: ["swimming", "rugby"],
  },
  {
    name: "Natille Nigellus",
    phone_number: "0747836409",
    age: 34,
    hobbies: ["skiing", "music", "books"],
  },
];
let allStudents = []
for( let i = 0; i < students.length; i++) {
    var student = new Student(students[i].name, students[i].phone_number)
    student.age = students[i].age
    student.hobbies = students[i].hobbies
    allStudents[i] = student
    console.log(allStudents[i])
}

for( let i = 0; i < allStudents.length; i++){
  if(allStudents[i].hobbies.includes("music") || allStudents[i].hobbies.includes("books")){
    allStudents[i].greetings()
  }
}
 
 


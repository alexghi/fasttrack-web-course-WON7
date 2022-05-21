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
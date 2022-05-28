class Student {
    constructor(name, phone_number, age, hobbies){
        this.name = name;
        this.phone_number = phone_number;
        this.age = age;
        this.hobbies = hobbies;
    }
    greetings() {
        console.log(`Hello my name is ${this.name} and I'm ${this.age} of age.`);
      }
    

    

    sethobbies(newhobbies){
        this.hobbies = newhobbies;
    }

    gethobbies(){
        return this.hobbies
    }

}

const s1 = new Student ({
    name: "Flavius",
    phone_number: 124578,
    age:37,
    hobbies : ["snowboarding"]

})
console.log(s1);
s1.gethobbies();
s1.sethobbies();

let StudentName = ["Sharleen Rollo", "Della Wally", "Ryana Ami", "Lydia Mercy",
"Mikey Valorie", "Chester Lexie", "Danette Luanna", "Adalyn", "Goddard", "Johnnie Peta", "Natille Nigellus"];


let PhoneNumbers = [12456,78956,4556565,145145151,187984,46345251,216451321,168487494,49846132,965487,256468];
let age = [25, 30, 31, 33, 25, 22, 29, 34, 35, 36, 24]
let hobbies = ["snowboarding", "music", "books", "footbal", "programming", "cycling"]
const allStudents = [];
for(let i = 0; i < StudentName.length; i++){
    allStudents[i] = new Student({name : StudentName[i], phone_number: PhoneNumbers[i],
         age: age[i], hobbies: hobbies[i]
});

    console.log(allStudents[i]);
    allStudents[i].gethobbies();
}



    

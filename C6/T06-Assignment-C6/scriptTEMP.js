class student {
    constructor({name, age, phoneNumber, hobbies}) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.hobbies = hobbies;
    }

    setHobbies(myHobby) {
        this.hobbies = myHobby;
    }

    getHobbies() {
        console.log(`${this.name}'hobby is ${this.hobbies}.`)
        return `${this.name}'hobby is ${this.hobbies}.`;
    }
    greetings() {
        // console.log(`“Hello, my name is ${this.name} and I’m ${this.age} of age. My hobby is ${this.hobbies}.`);
        return `Hello, my name is ${this.name} and I’m ${this.age} of age. My hobby is ${this.hobbies}.`;
    }
}

const studentNames = ["Sharleen Rollo", "Della Wally", "Ryana Ami", "Lydia Mercy", "Mikey Valorie", "Chester Lexie", "Danette Luanna", "Adalyn", "Goddard", "Johnnie Peta", "Natille Nigellus"];
const someAge = [25, 19, 25, 25, 21, 20, 27, 25, 22, 29, 29];
const somePhoneNo = ["0740 000 111", "0740 111 222", "0740 222 333", "0740 444 555", "0740 555 566", "0740 566 777", "0740 777 888", "0740 888 999", "0740 999 000", "0740 990 011", "0740 000 000"];
const someHobbies = ['sports', 'music', 'books', 'music', 'astronomy', 'travels', 'piano', 'pets', 'writing', 'books', 'books', 'food'];
const allStudents = [];

for(i = 0; i < studentNames.length; i++) {
    allStudents[i] = new student(studentNames[i]);
}
console.log(allStudents);

for(i = 0; i < allStudents.length; i++) {
    allStudents[i] = new student ({
        name: studentNames[i],
        age: someAge[i],
        phoneNumber: somePhoneNo[i],
        hobbies: someHobbies[i]
    })
    // console.log(allStudents[i].greetings());
}

for(i = 0; i < allStudents.length; i++) {
    allStudents[i].greetings();
    console.log(allStudents[i].greetings());
}

// for(i = 0; i < allStudents.length; i++ ) {
//     // allStudents[i].greetings();
//     console.log(allStudents[i].greetings());
// }



// FUNCTIA getHobbies()
    // S1.getHobbies();
    // S1.myHobby = "singing";
    // S1.setHobbies = "singing";
    // console.log(S1.getGreetings(), S1.getHobbies())






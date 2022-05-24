class student {
    constructor({name, age, phoneNumber, hobbies}) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        // this.hobbies = hobbies;
    }

    setHobbies(myHobby) {
        this.hobbies = myHobby;
    }

    getHobbies() {
        return `${this.name}'hobby is ${this.hobbies}.`;
    }
    greetings() {
        return `Hello, my name is <b>${this.name}</b> and I’m <b>${this.age}</b> of age. My hobby is <b>${this.hobbies}</b>.`;
    }

    getPhoneNo(){
        return `${this.name}'s phone number is ${this.phoneNumber}.`;
    }
    getAge(){
        return `${this.name} is ${this.age}.`;
    }

}

const studentNames = ["Sharleen Rollo", "Della Wally", "Ryana Ami", "Lydia Mercy", "Mikey Valorie", "Chester Lexie", "Danette Luanna", "Adalyn", "Goddard", "Johnnie Peta", "Natille Nigellus"];
const someAge = [24, 19, 24, 24, 21, 20, 27, 25, 22, 29, 29];
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
        // hobbies: someHobbies[i],
        // hobbies: "",
        setHobbies(myHobby) {
            this.hobbies = myHobby;
        }
    })
    allStudents[i].hobbies = someHobbies[i];    
    // console.log(allStudents[i].greetings()); 
    document.getElementById("greetings").innerHTML += `${allStudents[i].greetings()} <br>`;
    console.log(allStudents[i].getHobbies());
}

for(let i = 0; i < allStudents.length; i++) {
    if(allStudents[i].hobbies == 'music' || allStudents[i].hobbies == 'books') {
        console.log(`${allStudents[i].name} is one of the students having ${allStudents[i].hobbies} as a hobby.`)
        document.getElementById("hobby").innerHTML += `<b>${allStudents[i].name}</b> is one of the students having <b>${allStudents[i].hobbies}</b> as a hobby. <br>`;
    }
}

for(let i = 0; i < allStudents.length; i++) {
    if(allStudents[i].age == 24) {
        console.log(`${allStudents[i].name} is one of the students aged ${allStudents[i].age}.`)
        document.getElementById("age").innerHTML += `<b>${allStudents[i].name}</b> is one of the students aged <b>${allStudents[i].age}</b>. <br>`;
    }
}

// TEST
for(let i = 0; i < allStudents.length; i++) {
    if (allStudents[i].phoneNumber == "0740 000 111" && allStudents[i].age == 25){
        console.log(allStudents[i].getPhoneNo());
        console.log(allStudents[i].getAge());
    }
}





// for(i = 0; i < allStudents.length; i++){
//     allStudents[i].setHobbies = someHobbies[i];
// }

// for(i = 0; i < allStudents.length; i++) {
//     allStudents[i].greetings();
//     console.log(allStudents[i].greetings());
// }
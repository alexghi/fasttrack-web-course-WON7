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


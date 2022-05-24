
class Student {
    constructor (studentName, phone_number, age, hobbies) {
    
    this.studentName = studentName;
    this.phone_number = phone_number;
    this.age = age;
    this.hobbies = hobbies;

    }
    
  
}



 
let studentName = new Student("Charlie", "0759615745", 22);
console.log(studentName);


    let hobbies = (["music", "books", "driving", "clubbing", "reading", "something"])
    console.log (hobbies)

class Students extends Student {
    constructor(studentsName, phone_number, age, hobbies) {
        super(studentsName, phone_number, age, hobbies);
        this.studentsName = studentsName;
}
getGreeting(){
    return "Hello, my name is " + this.studentsName + " and I'm " + this.age + " of age.";
}
}


let studentsName = ["Sharleen Rollo", "Della Wally", "Ryana Ami", "Lydia Mercy",
"Mikey Valorie", "Chester Lexie", "Danette Luanna", "Adalyn Goddard", "Johnnie Peta", "Natille Nigellus"];





for(var i = 0; i < studentsName.length; i++) {
    console.log(studentsName[i])

    new Students(studentsName[i])
    Students[i] = new Students(studentsName[i])
}

let s1 = new Students ("Sharleen Rollo", "0164859315", "24", "music")
console.log(s1.getGreeting())

let s2 = new Students ("Della Wally", "0164859315", "25", "music")
console.log(s2)

let s3 = new Students ("Ryana Ami", "0164859315", "22", "music")
console.log(s3)

let s4 = new Students ("Lydia Mercy", "0164859315", "21", "books")
console.log(s4)

let s5 = new Students ("Mikey Valorie", "0164859315", "230", "books")
console.log(s5)

let s6 = new Students ("Chester Lexie", "0164859315", "35", "music")
console.log(s6)

let s7 = new Students ("Danette Luanna", "0164859315", "18", "music")
console.log(s7)

let s8 = new Students ("Adalyn Goddard", "0164859315", "19", "music")
console.log(s8)

let s9 = new Students ("Johnnie Peta", "0164859315", "29", "music")
console.log(s9)

let s10 = new Students ("Natille Nigellus", "0164859315", "27", "music")
console.log(s10)


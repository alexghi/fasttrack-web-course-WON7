class Student {
    constructor(studentName, age) {
        this.studentName = studentName
        this.age = age
    }

    greetings() {

    }

    getStudentName() {
        return this.studentName
    }

    getAge() {
        return this.age
    }
}




const s1 = new Student("Alex")

s1.getStudentName()
s1.getAge()






const studentName = ["Sharleen Rollo", "Della Wally", "Ryana Ami", "Lydia Mercy", "Mikey Valorie", "Chester Lexie", "Danette Luanna", "Adalyn Goddard", "Johnnie Peta", "Natille Nigellus"] 

const students = []

for(var i = 0; i < studentName.length; i++ ) {

    students[i] = new Student(studentName[i])
}

console.log(students)

for(students ) {
    console.log(student[i].greetings())
}

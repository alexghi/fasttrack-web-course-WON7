class Student {

    constructor(name, phoneNumber)
    {
        this.name= name;
        this.phoneNumber= phoneNumber;
    }

    greetings= function(){
        return `Hello, my name is ${this.name} and I am ${this.age} of age.`;
    }

    setHobbies= function(hobbies){
        this.hobbies=hobbies;
    }


    getHobbies= function(){
        return this.hobbies;
    }

    setAge = function(Age){
        this.age=Age;
    }

    getAge= function(){
        return this.age;
    }

}

// let Roxi = new Student("Roxana", "0727592750");
// Roxi.setHobbies(["reading", "gym", "web"]);

// console.log(Roxi.getHobbies());

let sirNume = ["Roxi", "Edu", "Dumitru", "Aurel", "Andrei"];
let sirNumere = ["0727592752", "0727592736", "0254935750", "0773830372", "0773830352"];
let sirStudenti = [];

for(let i=0; i<sirNume.length; i++) {
   sirStudenti[i] = new Student(sirNume[i], sirNumere[i]);
   sirStudenti[i].setHobbies(["books", "music"]);
   sirStudenti[i].setAge(21+i*2); 
}

sirStudenti[2].setHobbies(["sports", "web"]);
sirStudenti[sirStudenti.length-1].setAge(25);
// console.log(sirStudenti[0].greetings());

// console.log(sirStudenti)
for( let i=0; i<sirStudenti.length; i++) {
   if(sirStudenti[i].getAge() == 25){
    console.log(sirStudenti[i].greetings());
   }
}



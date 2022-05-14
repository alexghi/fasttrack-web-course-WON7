
(1) Nu stiu sa accesez datele din instantierea de mai jos. Ma descurc ceva mai bine cu var Bruce = new Student("Bruce", 19, "hiking").
 
var Bruce = new Student ({
    name: 'Bruce',
    age: 19,
    hobbies: ['hiking, ', 'reading, ', 'singing']
})


(2) Din array, vreau sa iau doar "hinking". Cum fac? Introduc argument in Luke.greeting()? 
Am incercat asa, dar nu merge: Luke.greeting(name, age, hobbies[0])

var Luke = new Student("Luke", 21, [" singing", " hiking"]);
console.log(Luke.greeting());

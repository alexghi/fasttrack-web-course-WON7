class LivingThing {
    constructor() {
       console.log('I am instantiating now');
    }
    breathe() {
        console.log('I am breathing')
    }
    move() {
        console.log('I am moving')
    }
}


class Cat extends LivingThing {
    constructor(name, age) {
        super();

        this.name = name
        this.age = age
    }

    getFullName() {
        return `my full name is ${this.name}`
    }

    getAge() {
        return `my age is ${this.age}`
    }
}

const myCat = new Cat('Fluffers');


console.log(Object.getPrototypeOf(myCat))
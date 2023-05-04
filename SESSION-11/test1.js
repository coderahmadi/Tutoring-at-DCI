// class concept in JS
// reusability:
/*
In this programming paradigm, a class is a blueprint for creating objects.
*/
// person_1
let person1 = {
    name: "Milica Radulovic",
    greet: function () {
        return "Hi, I'm " + this.name;
    }
};
console.log(person1.name);
console.log(person1.greet());
// person_2
let person2 = {
    name: "Jamal Ahmadi",
    greet: function () {
        return "Hi, I'm " + this.name;
    }
};
console.log(person2.name);
console.log(person2.greet());
//  with class
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hi, I'm ${this.name}`;
    }
}

let p1 = new Person('Milica Radulovic');
console.log('P1: ', p1.name);
console.log('P1 greet : ', p1.greet());

let p2 = new Person('Jamal Ahmadi');
console.log('P2: ', p2.name);
console.log('P2 greet : ', p2.greet());


// some keywords used Related to Object and Class;
/*
- instanceof (Person, Object)
    console.log(john instanceof Person); // true
    console.log(john instanceof Object); // true
- typeof ()

Examples....
*/
/*
Parent Class:
1. create a class Name Animal with constructor(name) and assign it to local variable
    class Animal {
        constructor(name) {
            this.name = name
        }
    }
2. 
    let anim = new Animal('Cow');
    console.log(anim.name);

3. create these methods for Animal Class
    animalName() {
        return `${this.name}`;
    }
    greet() {
        return `Hello I am ${this.name}`;
    }

4. Add 
    console.log(anim.animalName()); 
    console.log(anim.greet());


5. create Class Pet
    class Pet extends Animal {
        constructor(name, species) {
            super(name);
            this.species = species;
        }
        speciesName() {
            return `${this.species}`;
        }
    
    }    

6. try to create instance of Pet and access all parent and its own Fields and methods
    let pet1 = new Pet('T', 'Dog');
    // Parent Methods
    console.log('From Parent- N: ', pet1.animalName());
    console.log('From Parent- Greet: ', pet1.greet());
    // it's Own methods
    console.log('From Parent- SN: ', pet1.speciesName());

7.  (Pet) create a method of the same name inside child class like greet: override
    greet() {
        return `Hello my name is ${this.name}, I am a ${this.species}`;
    }
    console.log(pet1.greet());
    add comment also 'this method will override the greet method of parent'

8. try to add an static methods inside Parent
    static classMethod() {
        return 'Animals are the beauty of nature';
    }

    a- how to access it by parent?  console.log(Animal.classMethod());
    b- is it inherited?   yes
    c- how to access it inside Child?  console.log(Pet.classMethod());

9. If we make the same name Inside child
     static classMethod() {
        return `${this.name} are the beauty of nature`;
    }
    console.log(Pet.classMethod());

    add comments 'static methods also overrided'
*/


// static methods and static methods inheritance
//parent class

class Animal {
    constructor(name) {
        this.name = name
    }
    animalName() {
        return `${this.name}`;
    }
    greet() {
        return `Hello I am ${this.name}`;
    }
    static classMethod() {
        return 'Animals are the beauty of nature';
    }
}

let anim = new Animal('Cow');
console.log(anim.name);
console.log(anim.animalName());
console.log(anim.greet());

//Pets extending the parent class
class Pet extends Animal {
    constructor(name, species) {
        super(name);
        this.species = species;
    }
    speciesName() {
        return `${this.species}`;
    }
    // this method will override the greet method of parent
    greet() {
        return `Hello my name is ${this.name}, I am a ${this.species}`;
    }
    // static methods also overrided
    static classMethod() {
        return `${this.name} are the beauty of nature`;
    }
}

let pet1 = new Pet('T', 'Dog');
// Parent Methods
console.log('From Parent- N: ', pet1.animalName());
console.log('From Parent- Greet: ', pet1.greet());
// it's Own methods
console.log('From Parent- SN: ', pet1.speciesName());
console.log(pet1.greet());

console.log(Animal.classMethod());
console.log(Pet.classMethod());




// Inheritance: 
class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}
// instance field, constructor and methods of parent are inherited by child
class Teacher extends Person {
    /*
    // By default
  constructor(...args) {
     super(...args);
  }

 constructor(name, age, job, title) {
     super(name, age, job);
     this.title = title
  }

  */
    greet() {
        return this.name;
    }
}


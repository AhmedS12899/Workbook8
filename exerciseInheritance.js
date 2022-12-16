"use strict";

class Person{

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Employee extends Person {
    constructor(firstName, lastName, id, jobTitle, payRate) {
        super(firstName, lastName);
        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    getIntro(){
        return `${this.getFullName()} ${this.id} ${this.jobTitle} ${this.payRate}`
    }

    getGrossPay(hoursWorked){
        this.hoursWorked = hoursWorked;
        return this.hoursWorked * this.payRate;
    }
}
//Exercise 1
// let person = new Person('Snoop', 'Dog');
// let full = person.getFullName();
// console.log(full);

//Exercise 2
// let employee1 = new Employee('Snoop', 'Dogg');
// let employee2 = new Employee('John', 'Cena', 69, 'Wrestler', 69.99);
// console.log(employee1.getFullName())
// console.log(employee2.getIntro())

//Exercise 3
let employee1 = new Employee('Snoop', 'Dogg', 25, 'Rapper', 100);
let employee2 = new Employee('John', 'Cena', 69, 'Wrestler', 69.99);

console.log(employee1.getGrossPay(40))
console.log(employee2.getGrossPay(60))


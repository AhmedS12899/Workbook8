"use strict";

class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }

    getIntro() {
        let intro =
        "Hi! I'm " + this.getFullName() + " and I am a " +
        this.jobTitle;
        return intro;
        }
}

// let employee1 = new Employee(
//     1, "Ian", "Auston", "Graphic Artist", 42.50);
// console.log(`Employee ${employee1.getFullName()} created`);
// employee1.promote("Sr. Graphic Artist", 46.75);
// console.log(`Job title is ${employee1.jobTitle}`);
// console.log(`Pay rate is $${employee1.payRate}`);

let employee2 = new Employee(2, "Josh", "Smith", "Jr. Developer", 35);
// console.log(employee2.getFullName());
// console.log(employee2.jobTitle)
// console.log(employee2.payRate)
employee2.promote("Sr Developer", 50);
// console.log(employee2.getFullName());
// console.log(employee2.getIntro());
// console.log(intro);

let intro = employee2.getIntro();
console.log(intro);
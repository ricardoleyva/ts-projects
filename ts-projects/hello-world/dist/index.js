"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0) {
            throw new Error("Invalid value");
        }
        this._balance = value;
    }
}
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Ric";
seats["A2"] = "Rico";
let account = new Account(1, "Ric", 100000);
console.log(account.balance);
account.deposit(110009);
console.log(account.balance);
account.balance = 10;
console.log(account.balance);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Walking...");
    }
}
class Student extends Person {
    constructor(studentID, firstName, lastName) {
        super(firstName, lastName);
        this.studentID = studentID;
    }
    takeTest() {
        this.walk();
        console.log("Taking a test...");
    }
}
let student = new Student(1, "Ricardo", "Leyva");
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
printNames([
    new Student(2, "Ric", "Leyva"),
    new Teacher("John", "Soprano"),
    new Principal("Mary", "Ellis"),
]);
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a circle");
    }
}
//# sourceMappingURL=index.js.map
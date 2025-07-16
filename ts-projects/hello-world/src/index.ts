// let age: number = 20;
// if (age < 50) age += 10;
// console.log(age);

// let sales = 123_456_3982;
// let course = "Typescript";
// let is_published = true;
// let level; // Avoid using type 'any'
// let a = 100;
// let b = "Coffee";
// let c = [true, false, false];
// let d = { age: 5 };
// let e = [3];
// let f;
// let g = [];
// function render(document: any) {
//   console.log(document);
// }
// //Array
// let numbers: number[] = [1, 2, 3];

// //Tuple (Better if used only 2 at a time as key pairs)
// let user: [number, string] = [1, "Ric"];

// //Enums
// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);

// //Functions (Better is type of return is coded, if no return then void)
// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 2020) return income * 0.4;
//   return income * 0.2;
// }

// console.log(calculateTax(10_000, 2019));

// //Objects
// let employee: {
//   readonly id: number; //Readonly cannot be modified
//   name: string;
//   fax?: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
// employee.name = "Ric";
// console.log(employee);

// // Type Alias
// type Employee = {
//   readonly id: number; //Readonly cannot be modified
//   name: string;
//   fax?: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// //Union types
// function kgToLbs(weight: number | string): number {
//   // Narrowing
//   if (typeof weight === "number") return weight * 2.2;
//   else return parseInt(weight) * 2.2;
// }

// kgToLbs(10);
// kgToLbs("10kg");

// //Intersection types
// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag() {},
//   resize() {},
// };

// //Literal types (exact or specific value)
// type Quantity = 50 | 100;
// type Metric = "cm" | "inch";

// //Nullable types
// function greet(name: string | null | undefined) {
//   if (name) console.log(name.toUpperCase());
//   else console.log("Hola");
// }

// greet("hello world");
// greet(null);
// greet(undefined);

// //Optional chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

//Optional element access operator
//customers?.[0]

//Optional call
let log: any = null;
log?.("a");

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear()); //Optional property access operator

//The nullish coaelscing operator
let speed: number | null = null;
//Falsy values --> (undefined, null, '', false, 0)
let ride = {
  speed: speed ?? 30,
};

//Type assertions
// let phone = document.getElementById("phone") as HTMLInputElement;
// let address = <HTMLInputElement>document.getElementById("address");

//Unknown type (better than any so you have to call the methods in the object)
function render(document: unknown) {
  // Narrowing
  if (typeof document === "string") {
    document.toUpperCase();
  }
}

//Never type
// function reject(message: string): never {
//   throw new Error(message);
// }

// function processEvents(): never {
//   while (true) {
//     //Read a message from a queue
//   }
// }

// reject("hola");
// processEvents();
// console.log("Hello World");

//Exercises
// A
type Users = {
  name: string;
  age: number;
  occupation?: string;
};
let user1: Users = {
  name: "John Smith",
  age: 30,
  occupation: "Software Engineer",
};
let user2: Users = {
  name: "Kate Muller",
  age: 28,
};

// B
type Bird = {
  fly: () => void;
};
type Fish = {
  swim: () => void;
};
type Pet = Bird | Fish;

// C
type DaysOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let day: DaysOfWeek = "Monday";
// D
function getUser() {
  let data = {
    address: { street: undefined },
  };
  return data;
}
let user = getUser();
console.log(user && user.address ? user.address.street : undefined);
console.log(user?.address?.street);

// let x = foo !== null && foo !== undefined ? foo: bar();
// let x = foo ?? bar();
//  //E
// let value: unknown = 'a';
// console.log(value.toUpperCase());
let value: unknown = "a";
if (typeof value === "string") console.log(value.toUpperCase());

//Classes
class Account {
  //Can be initialized on constructor
  //readonly id: number;
  //owner: string;
  //private _balance: number; //Convention is to use a _ before any private property
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  // getBalance(): number {
  //   return this._balance;
  // }
  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value <= 0) {
      throw new Error("Invalid value");
    }
    this._balance = value;
  }
}

//Index signatures
class SeatAssignment {
  [seatNumber: string]: string; //Index signature property
}

let seats = new SeatAssignment();

//Two ways on assigning values to index signatures
seats.A1 = "Ric";
seats["A2"] = "Rico";

//Objects
let account = new Account(1, "Ric", 100000);
console.log(account.balance);
account.deposit(110009);
console.log(account.balance);
account.balance = 10;
console.log(account.balance);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);

//Static members
class Ride {
  private static _activeRides: number = 0;

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

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

//Inheritance
class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  //Protected members can be inherited, but private members won't
  protected walk() {
    console.log("Walking...");
  }
}

class Student extends Person {
  constructor(public studentID: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  takeTest() {
    this.walk();
    console.log("Taking a test...");
  }
}

let student = new Student(1, "Ricardo", "Leyva");

//Method overriding
class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}

let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);

//Polymorphism
//Classes should be OPEN for EXTENSION and CLOSED for MODIFICATION
printNames([
  new Student(2, "Ric", "Leyva"),
  new Teacher("John", "Soprano"),
  new Principal("Mary", "Ellis"),
]);
function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}

//Abstract classes and methods
//Abstract classes cannot create objects directly, these need to be extended first
abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  override render(): void {
    console.log("Rendering a circle");
  }
}

//Interfaces
//Cannot have method implementations, only serve to show the shape of a class to be implemented
// abstract class Calendar {
//   constructor(public name: string) {}
//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}

//Exercises
class Logger {
  constructor(public fileName: string) {}

  log() {
    console.log("Hello " + this.fileName);
  }
}

class PersonA {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Employee extends PersonA {
  constructor(public salary: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}

//Option A
interface Employees {
  name: string;
  salary: number;
  address: {
    street: string;
    city: string;
    zipCode: number;
  };
}

//Option B
interface Address {
  street: string;
  city: string;
  zipCode: number;
}
interface Employee {
  name: string;
  salary: number;
  address: Address;
}

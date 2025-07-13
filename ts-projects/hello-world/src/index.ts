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

// Type Alias
type Employee = {
  readonly id: number; //Readonly cannot be modified
  name: string;
  fax?: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

//Union types
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

//Intersection types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag() {},
  resize() {},
};

//Literal types (exact or specific value)
type Quantity = 50 | 100;
type Metric = "cm" | "inch";

//Nullable types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola");
}

greet("hello world");
greet(null);
greet(undefined);

//Optional chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

//Optional element access operator
// customers?.[0]

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

//Excercises
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

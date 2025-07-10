// let age: number = 20;
// if (age < 50) age += 10;
// console.log(age);

let sales = 123_456_3982;
let course = "Typescript";
let is_published = true;
let level; // Avoid using type 'any'
let a = 100;
let b = "Coffee";
let c = [true, false, false];
let d = { age: 5 };
let e = [3];
let f;
let g = [];
function render(document: any) {
  console.log(document);
}
//Array
let numbers: number[] = [1, 2, 3];

//Tuple (Better if used only 2 at a time as key pairs)
let user: [number, string] = [1, "Ric"];

//Enums
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

//Functions (Better is type of return is coded, if no return then void)
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2020) return income * 0.4;
  return income * 0.2;
}

console.log(calculateTax(10_000, 2019));

//Objects
let employee: {
  readonly id: number; //Readonly cannot be modified
  name: string;
  fax?: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};
employee.name = "Ric";
console.log(employee);

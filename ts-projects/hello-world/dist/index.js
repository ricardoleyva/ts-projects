"use strict";
let sales = 1234563982;
let course = "Typescript";
let is_published = true;
let level;
let a = 100;
let b = "Coffee";
let c = [true, false, false];
let d = { age: 5 };
let e = [3];
let f;
let g = [];
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let user = [1, "Ric"];
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2020)
        return income * 0.4;
    return income * 0.2;
}
console.log(calculateTax(10000, 2019));
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    },
};
employee.name = "Ric";
console.log(employee);
//# sourceMappingURL=index.js.map
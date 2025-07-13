"use strict";
var _a, _b;
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
let textBox = {
    drag() { },
    resize() { },
};
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola");
}
greet("hello world");
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let log = null;
log === null || log === void 0 ? void 0 : log("a");
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
function render(document) {
    if (typeof document === "string") {
        document.toUpperCase();
    }
}
let user1 = {
    name: "John Smith",
    age: 30,
    occupation: "Software Engineer",
};
let user2 = {
    name: "Kate Muller",
    age: 28,
};
let day = "Monday";
function getUser() {
    let data = {
        address: { street: undefined },
    };
    return data;
}
let user = getUser();
console.log(user && user.address ? user.address.street : undefined);
console.log((_b = user === null || user === void 0 ? void 0 : user.address) === null || _b === void 0 ? void 0 : _b.street);
let value = "a";
if (typeof value === "string")
    console.log(value.toUpperCase());
//# sourceMappingURL=index.js.map
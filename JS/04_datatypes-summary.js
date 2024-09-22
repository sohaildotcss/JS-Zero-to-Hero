let a = "";
let b = null;
let c;
let d = null;
console.log(a == b, c == d);

//! Primitive Datatypes: String, Number, Boolean, Null, Undefined, Symbol, BigInt.

let username = "Sohail";
let age = 23;
const isLoggedIn = false;
let temperature = null;
let studentId = undefined;
let employee = Symbol("123");
let newEmploye = Symbol("123");
console.log(employee == newEmploye);
let bigNumber = 12892902392390232n;

//! Reference(Non-Primitive): Arrays, Objects, Functions.

let array = ["Sohail", "Abdul Rahman", "vasu"];
console.log(typeof array);

let newObject = {
  username: "Sam",
  age: 23,
  address: "57-64,Beside Searock School lane,King Market,Kurnool.",
};
console.log(typeof newObject);

let fun = function () {
  console.log("Function Exectuted");
};
console.log(typeof fun);

/*
JavaScript is "dynamically typed".
This means that the type of a variable is determined at runtime, not at compile time. 
let x = 5; // x is a number
x = "hello"; // x is now a string
*/

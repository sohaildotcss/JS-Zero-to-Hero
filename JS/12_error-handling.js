//* Error Handling in JavaScript
let a = 10;
let b = 5;
console.log(a + b);
console.log(a + b);
console.log(a + b);
console.log(a + c);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a + b);
console.log(a + b);
console.log(a + b);

//here if any line of code will get an error then the remaining next lines of code will not be executed.
//So, to handle this error we use try-catch block.

console.log(a + b);
console.log(a + b);
console.log(a + b);
try {
	console.log(a + c);
} catch (err) {
	console.log(err);
}
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a + b);
console.log(a + b);
console.log(a + b);

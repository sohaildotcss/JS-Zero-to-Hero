// Due to synchronous programming, sometimes imp instructions get
// blocked due to some previous instructions, which causes a delay in the UI.
// Asynchronous code execution allows to execute next instructions
// immediately and doesn't block the flow.

function fun() {
	console.log("Hello");
}

setTimeout(fun, 4000);

//setTimeout is used to delay the functions for a particular time,
// in order to execute them after the given interval of time is completed.

console.log("one");
console.log("two");
console.log("three");
setTimeout(() => {
	console.log("Hello world");
}, 4000);
console.log("four");
console.log("five");

// setTimeout works asynchronously which means it will not block the flow of the code.
// This is called asynchronous programming.
//! When the compiler hits line.18 then the timer of 4sec will start
//! and after 4sec the compiler will hit line.19

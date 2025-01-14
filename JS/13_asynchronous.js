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

function getData(dataId, getNextData) {
	setTimeout(() => {
		console.log("data", dataId);
		if (getNextData) {
			getNextData();
		}
	}, 2000);
}
getData(1, () => {
	getData(2);
});

// How it works:
// First call to getData(1, ...):
// dataId = 1 is passed.
// A 2-second delay is simulated using setTimeout.
// After 2 seconds, it logs:
// data 1

// Then it calls getNextData, which is the callback function:
// () => { getData(2); }

// Second call to getData(2):
// This call runs similarly, but with dataId = 2.
// Again, after 2 seconds, it logs:
// data 2

// Final Output:
// After a total of 4 seconds, you get the output:
// data 1
// data 2


//! Callbacks continuation in 14_promises.js
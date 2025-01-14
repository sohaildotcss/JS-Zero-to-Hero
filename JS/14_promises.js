// function getData(data, getNextData) {
// 	setTimeout(() => {
// 		console.log(data);
// 		if (getNextData) {
// 			getNextData();
// 		}
// 	}, 2000);
// }

// getData(1, () => {
// 	getData(2);
// });

// we will get data 1 after 2sec and then after 2sec we will get data 2.
// Similiarly we can get further data if we want using nested callbacks as shown below

//* Callback Hell
// function getData(data, getNextData) {
// 	setTimeout(() => {
// 		console.log(data);
// 		if (getNextData) {
// 			getNextData();
// 		}
// 	}, 2000);
// }

// getData(1, () => {
// 	getData(2, () => {
// 		getData(3, () => {
// 			getData(4, () => {
// 				getData(5);
// 			});
// 		});
// 	});
// });

//! This is called Callback hell, where the callbacks are nested inside callbacks.
//! Nested callbacks stacked below one another forming a pyramid structure.
//! This style of programming becomes difficult to understand & manage.

//To solve this callback hell, Promise are used

//* Promise
// Promise is an object and have 3 states:-
// Pending: the result is undefined
// Resolve: the result is a value (fulfilled)
// Reject: the result is an error object.
// We cannot do anything with pending state but we can use resolve and reject state.

//how to create a new promise?
let sohail = new Promise((resolve, reject) => {
	console.log("Hello world");
	resolve("success");
});

//how to handle promises returned by api's:-
function fun(data) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(data);
			resolve("success");
			reject("error");
		}, 2000);
	});
}
let sam = fun(1); //promise returned by func is stored in a variable


//! In general we don't create any promises, Promises are returned by api's and
//! we just store them in a variable and perform required operations. (as shown in above)

//How to use promises?
// Whenever we recieve a promise it comes with either resolve() or reject(),
// for example if we make an api call either we recieve the data or recieve the error.

//* .then() & .catch()
// .then is used if the promise is fulfilled and .catch is used if the promise rejects.
// The function passed in .then() is executed only if the promise is fulfilled.

const apiCall = () => {
	return new Promise((resolve, reject) => {
		console.log("data recieved");
		resolve("success"); //we can pass any msg in the resolve
		reject("error"); //we can pass any msg in the reject
	});
};
let storedData = apiCall(); //promise is being stored in a variable

// If the above promise is fulfilled then automatically the below code block will be executed .
storedData.then((res) => {
	console.log(res, "Promise resolved"); //.then() comes with default parameter, "res"(we can name it anything) in which the already passed down resolve message is stored. ref:line.82
});

// Similiarly, if the above promise(line.79) is rejected then automatically the below code block will be executed.
storedData.catch((err) => {
	console.log(err, "Error occurred"); //.catch() also comes with default parameter, "err"(we can name it anything) in which the already passed down reject message is stored. ref:line.83
});

//! From resolve() and reject() only one will be executed everytime, not both.

//* Promise Chaining:-

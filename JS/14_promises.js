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
// Promises have 3 states:-
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
//! we store them in a variable and perform required operations. (as shown in above)

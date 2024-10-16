// const sumFunc = (a, b) => {
// 	return a + b;
// };
// console.log(sumFunc(2, 4));

// const mulFunc = (a, b) => {
// 	return a * b;
// };
// console.log(mulFunc(2, 4));

//` Practise
// Qs. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

// function vowelFunc(str) {
// 	let count = 0;
// 	for (elements of str) {
// 		if (
// 			elements == "a" ||
// 			elements == "e" ||
// 			elements == "i" ||
// 			elements == "o" ||
// 			elements == "u"
// 		) {
// 			count++;
// 		}
// 	}
// 	return count;
// }

// const res = vowelFunc("hello");
// console.log(res);

// const countVowels = (string) => {
// 	let count = 0;
// 	for (let i = 0; i < string.length; i++) {
// 		if (
// 			string[i] == "a" ||
// 			string[i] == "e" ||
// 			string[i] == "i" ||
// 			string[i] == "o" ||
// 			string[i] == "u"
// 		) {
// 			count++;
// 		}
// 	}
// 	return count;
// };
// console.log(countVowels("Sam"));
//`

// Callback Functions:- A callback function is a function that is passed as an argument to another function. This function is executed inside the other function. Callback functions are used in asynchronous programming. They are used to handle tasks that take some time to complete, such as reading a file or making a network request.
//` Practise
// Qs. For a given array of numbers, print the square of each value using the forEach loop.
// const numbers = [1, 2, 3, 4, 5];
// const res = [];
// numbers.forEach((num) => {
// 	res.push(num ** 2);
// });

// console.log(res);

let arr = [5, 6, 2, 1, 101, 3];
const output = arr.reduce((res, currVal) => {
	return res > currVal ? res : currVal;
});
console.log(output);

//`

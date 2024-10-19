//* Arrays are Mutable in JS
//* Example:
// let arr = [22, 34, 8, "Sohail", 66, "*"];
// arr[0] = 7;
// console.log(arr); // [7, 34, 8, "Sohail"]

// for (i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (items of arr) {
// 	console.log(items);
// }

//` Practise
// const marks = [85, 97, 44, 37, 76, 60];
// let averageMarks = 0;
// for (let i = 0; i < marks.length; i++) {
// 	averageMarks = averageMarks + marks[i];
// }
// console.log(averageMarks / marks.length);

// const prices = [250, 645, 300, 900, 50];
// for (let i = 0; i < prices.length; i++) {
// 	prices[i] = prices[i] - prices[i] / 10;
// }
// console.log(prices);

// const companies = [
// 	"Bloomberg",
// 	"Microsoft",
// 	"Uber",
// 	"Google",
// 	"IBM",
// 	"Netflix",
// ];

// companies.shift();
// companies.splice(2, 1, "Ola");
// companies.push("amazon");
// console.log(companies);

// Problem: Given an array, return a new array without any duplicate values.
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const result = [];
// for (nums of numbers) {
// 	if (!result.includes(nums)) {
// 		result.push(nums);
// 	}
// }
// console.log(result);

// Problem: Write a function that returns the maximum and minimum elements from an array.
// const array = [10, 5, 100, 0, -5, 50];
// function maxMin(arr) {
// 	maximumValue = Math.max(...arr);
// 	minimumValue = Math.min(...arr);
// 	console.log(`The Maxium element is ${maximumValue} and the Minimum element is ${minimumValue}`
// 	);
// }
// maxMin(array);

// Problem: Flatten a nested array (e.g., [1, [2, [3, 4]]] to [1, 2, 3, 4]).
// const nestedArray = [1, [2, [3, 4]], 5];
// const flattedArray = nestedArray.flat(Infinity);
// console.log(flattedArray);

// Problem: Calculate the sum of all elements in an array.
// const array = [1, 2, 3, 4, 5];
// function fun(total, num) {
// 	return total + num;
// }
// const res = array.reduce(fun);
// console.log(res);

//Problem: Given an array of numbers, return a new array containing only the even numbers.
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const newArray = array.filter(fun);

// function fun(num) {
// 	return num % 2 === 0;
// }

// console.log(newArray);

// Problem: Sort an array of objects based on a specified property (e.g., age).
// const people = [
// 	{ name: "John", age: 30 },
// 	{ name: "Jane", age: 25 },
// 	{ name: "Jim", age: 35 },
// ];
// people.sort((a, b) => b.age - a.age);
// console.log(people);

// Problem: Return the index of a specific element in an array, or -1 if it doesn’t exist.
// const array = ["apple", "banana", "cherry"];
// const element = "banana";
// const res = array.indexOf(element);
// console.log(res);

// Problem: Check if all elements in the array are even numbers.
// const array = [2, 4, 6, 8];
// function test(elem) {
// 	return elem % 2 == 0;
// }
// console.log(array.every(test));

// Problem: Convert an array of strings into a single string, separated by commas.

// const array = ["apple", "banana", "cherry"];
// let res = array.join(",");
// console.log(typeof res);

// Problem: Create a new array that contains the squares of all numbers in the original array.
// const array = [1, 2, 3, 4, 5];
// const res = [];
// array.map((arr) => res.push(arr ** 2));
// console.log(res);

//`

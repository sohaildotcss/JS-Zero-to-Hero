const sumFunc = (a, b) => {
	return a + b;
};
console.log(sumFunc(2, 4));

const mulFunc = (a, b) => {
	return a * b;
};
console.log(mulFunc(2, 4));

//` Practise
// Qs. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

function vowelFunc(str) {
	let count = 0;
	for (elements of str) {
		if (
			elements == "a" ||
			elements == "e" ||
			elements == "i" ||
			elements == "o" ||
			elements == "u"
		) {
			count++;
		}
	}
	return count;
}

const res = vowelFunc("hello");
console.log(res);

const countVowels = (string) => {
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		if (
			string[i] == "a" ||
			string[i] == "e" ||
			string[i] == "i" ||
			string[i] == "o" ||
			string[i] == "u"
		) {
			count++;
		}
	}
	return count;
};
console.log(countVowels("Sam"));
//`

// Callback Functions:- A callback function is a function that is passed as an argument to another function. This function is executed inside the other function. Callback functions are used in asynchronous programming. They are used to handle tasks that take some time to complete, such as reading a file or making a network request.

//` Practise
// Qs. For a given array of numbers, print the square of each value using the forEach loop.
const numbers = [1, 2, 3, 4, 5];
const res = [];
numbers.forEach((num) => {
	res.push(num ** 2);
});

console.log(res);

// Qs. Find the maximum value in an array using the reduce method.
const arr = [5, 6, 2, 1, 101, 3];
const output = arr.reduce((initialVal, currVal) => {
	return initialVal > currVal ? initialVal : currVal;
});
console.log(output);

//We are given array of marks of students. Filter out the marks of students that scored 90+.
const marks = [87, 93, 64, 99, 86];
const studentMarks = [];
marks.filter((arr) => {
	arr > 90 ? studentMarks.push(arr) : 0;
});
console.log(studentMarks);

//Qs. Take a number n as input from user.
//Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate product of all numbers in the array.
const userInput = prompt("Enter a number.");
const arr = [];
for (let i = 1; i <= userInput; i++) {
	arr.push(i);
}
const sum = arr.reduce((i, k) => {
	return i + k;
});

const multiply = arr.reduce((i, k) => {
	return i * k;
});
console.log(`Array of numbers: [${arr}]`);
console.log(sum);
console.log(multiply);

//`

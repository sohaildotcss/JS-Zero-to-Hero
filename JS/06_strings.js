const name = "Sohail";
const age = 23;
const city = "Kurnool";

const newName = new String("SHaik");
//h type of strings created with new keyword is always an Object.
console.log(typeof newName); // Object
console.log(typeof city); // String

// console.log(`Hello my name is ${name}, and my age is ${age} and i live in ${city}.`);

const text = "ShaikSohailAhamed";
console.log(text.length);

//* at()
console.log(text.at(3)); //i, positive index starts with 0 from start of string
console.log(text.at(-4)); //a, negative index starts with -1 from end of string

//* charAt()
console.log(text.charAt(6)); //o, starts with 0 from start of a string
console.log(text.charAt(-6)); //"", doesn't support negative indexing.

//* charCodeAt()
/*
Unicode Range	Characters	Description
0-31	Control characters	Non-printable control codes
32-47	to /	Space and punctuation
48-57	0 to 9	Digits
58-64	: to @	Punctuation and symbols
65-90	A to Z	Uppercase English alphabet
91-96	[ to `	Brackets and symbols
97-122	a to z	Lowercase English alphabet
123-126	{ to ~	Brackets and symbols
127-159	Control characters	Additional non-printable codes
160-191	Non-breaking space to ¿	Punctuation and Latin-1
192-223	À to ß	Uppercase accented Latin letters
224-255	à to ÿ	Lowercase accented Latin letters
*/

// for (i = 0; i <= text.length; i++) {
// 	if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
// 		return true;
// 	}
// 	console.log("Upper Case");
// }
// let lowercase = 0;
// let uppercase = 0;
// for (i = 0; i <= text.length; i++) {
// 	if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
// 		lowercase++;
// 	} else if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
// 		uppercase++;
// 	}
// }
// console.log(lowercase);
// console.log(uppercase);

//* endswith()
let str1 = "Hello world, How are you world?";
console.log(str1.endsWith("you?")); //false

//* includes()
console.log(text.includes("Shaik")); //true

//* indexOf()
console.log(text.indexOf("A")); //11

//* lastIndexOf()
console.log(str1.lastIndexOf("world")); //6

//* length
console.log(text.length); //5, counting starts with 1

let string1 = "@";
let string2 = prompt("Enter your full name");
let string3 = string2.length;
console.log(string1.concat(string2).concat(string3));

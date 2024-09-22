const name = "Sohail";
const age = 23;
const city = "Kurnool";

const newName = new String("SHaik");
//h type of strings created with new keyword is always an Object.
console.log(typeof newName);

console.log(typeof city); // String

// console.log(`Hello my name is ${name}, and my age is ${age} and i live in ${city}.`);

const text = "ShaikSohailAhamed";
console.log(text.length);

console.log(text.at(3)); //i, positive index starts with 0 from start of string
console.log(text.at(-4)); //a, negative index starts with -1 from end of string

console.log(text.charAt(6)); //o, starts with 0 from start of a string
console.log(text.charAt(-6)); //"", doesn't support negative indexing.



console.log(1 + 2); //3
console.log("1" + "2"); //12
console.log("1" + 2); //12
console.log("1" + 2 + 2); //122
console.log(3 + 2 + "2"); //52
console.log(6 * 2 - 3 + "7");

//h If string is first then remaining will be converted to string,if string is in last, first arithematic operations are done the string is added at last.

console.log(+true);
console.log(-true);
console.log(+false);
console.log(-false);

//! Unary Plus(+) / Unary Minus(-): The unary plus or minus operator attempts to convert its operand into a number. If the operand is already a number, it simply returns that number. Otherwise, it tries to coerce the operand to a number.

console.log(+"123"); // Output: 123 (string "123" to number 123)
console.log(-"123"); // Output: -123
console.log(+null); // Output: 0 (null to 0)
console.log(-null); // Output: -0

//! Tip:- if variable is first (a++) then original value is used first and then operation is done and if operator is first(++a) then operation is done first and then updated value is used.
let gameCounter = 6;
let x = gameCounter++; //! Postfix Operator
//h first Use and then Add.
console.log(x);
console.log(gameCounter);

let score = 2;
let y = ++score; //! Prefix Operator
//h first Add and then Use.
console.log(y);
console.log(score);

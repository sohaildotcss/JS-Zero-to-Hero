//- StackMemory (Primitive)
let username = "sohaildotcss";
let newUsername = username;
// here only value is passed to another variable.
newUsername = "figma";
console.log(username, newUsername);

//- HeapMemory(Non - Primitive)
let userOne = {
	email: "sohaildotcss@gmail.com",
	id: 12,
};
let userTwo = userOne;
// here the refernce of the address is passed to other variable.
userTwo.email = "sohailqwerty7@gmail.com";
console.log(userOne.email);

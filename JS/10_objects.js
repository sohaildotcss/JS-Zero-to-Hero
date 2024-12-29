//Objects :- A javaScript object is an entity having state and behavior (properties and method).

const student = {
	name: "Sohail", // properties
	marks: 96.7, // p
	isPassed: true, // p
	printDetails: function () {
		console.log(this.name); //this refers to the current object, in this case it's like student.name
	}, // method
};
student.marks; // accessing properties from an object.
student.printDetails(); // accessing method/function from an object

// Methods to write functions in objects. both behave like same.
const test = {
	movie1: function () {
		console.log("Movie1");
	},
	movie2() {
		console.log("Movie2");
	},
};

//JS objects have a special property called prototype. Its like an object inside every object.The inbuilt features of objects comes from prototype.
// The same happens with arrays, functions, etc. They have their own prototype.
// To access the prototype of an object, just write object name in browser console and you will see __proto__ property.
// features like toString(), valueOf(), hasOwnProperty(), isPrototypeOf(), etc. are present in prototype.

//to add an object as a prototype to another object, we can do like

const marksDisplay = {
	displayMarks() {
		console.log("Marks are displayed from prototype");
	},
};
student.__proto__ = marksDisplay; // creates a protoype in student object which includes marksDisplay object.
// here marksDisplay becomes prototype and will be added to student as a prototype

//If object & prototype have same method, object's method will be used.
//If clash happens between object and prototype the object wins.
const employee = {
	tax() {
		console.log("10%");
	},
};

const manager = {
	tax() {
		console.log("20%");
	},
};

employee.__proto__ = manager; // here manager becomes prototype and will be added to employee as a prototype
console.log(employee.tax()); // 10%. here object method/function is used which is employee.


// Class is a program-code template for creating objects.
// Those objects will have some state(variables) & some behaviour(functions) inside it.
// Classes are used to create objects in bulk.

class Cars {
	start() {
		console.log("Start the car");
	}
	stop() {
		console.log("Stop the car.");
	}
	setBrand(brand) {
		this.brandName = brand;
	}
}

let fortuner = new Cars();

let toyota = new Cars();
console.log(typeof fortuner); // object

fortuner.setBrand("Audi");

//Constructor:-
// When objects are created using "new" keyword then "constructors" are also being created automatically in objects.
// Constructors are invoked immediately
//! to add a constructor while creating a class, we can write manually
class Company {
	constructor(salary, hike) {
		console.log("constructor is added manually"); //this will be printed immediately even if we dont run it.
		this.salary = salary;
		this.hike = hike;
	}
	addEmployee() {
		console.log("added a new employee");
	}
	removeEmployee() {
		console.log("removed a new employee");
	}
} //this will not create constructor in it.

let google = new Company("50k", 10); //this will create constructor.
let uber = new Company("40k", 7); //this will create constructor.

class Parent {
	test() {
		console.log("This is a parent");
	}
}

let child = new Parent();

class Parent {
	test() {
		console.log("This is a parent");
	}
}

class Child extends Parent{
	
}
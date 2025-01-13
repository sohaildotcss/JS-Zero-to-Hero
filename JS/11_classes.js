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

//* Inheritance
// Child will inherit all properties of parent including constructors.
class Parent {
	test() {
		console.log("This is a parent");
	}
}

class Child extends Parent {}

let myNew = new Child();
myNew.test();

//`Practise````````````````````````````````````````````````````````````````````````
// 1. Create a Student class with properties name and grade.
// 2. Add a method introduce() that prints: Hi, I'm [name] and I got a grade of [grade].
// 3. Create an object and call the method.
class Student {
	constructor(name, grade) {
		this.name = name;
		this.grade = grade;
	}
	introduce() {
		console.log(`Hi iam ${this.name} and i got grade of ${this.grade}`);
	}
}
class Student1 extends Student {
	bye() {
		console.log(`Bye from ${this.name}`);
	}
}
let sohail = new Student1("Sohail", 7);
sohail.introduce();
sohail.bye();

//I have used inheritance just for practise, we can solve the question without inheritance also.
//```````````````````````````````````````````````````````````````````````````````````````/

//* Method-Overriding

//If Child & Parent have same method, child's method will be used.
class Person {
	eat() {
		console.log("eat");
	}
	sleep() {
		console.log("sleep");
	}
	work() {
		console.log("work");
	}
}

class Engineer extends Person {
	work() {
		console.log("iam a engineer");
	}
}

let newEnginner = new Engineer();

newEnginner.work(); //o/p:-iam a engineer, here child's will be called by overrriding parent's method

//* Super Keyword
//The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
//We cannot create constructors in child class without calling super() keyword
//Must call super constructor in child/derived class before accessing 'this' or exiting from derived constructor.
class Person1 {
	constructor(name) {
		console.log("Entered in parent constructor");
		this.name = name;
		this.species = "homo sapiens";
		console.log("Exited from parent constructor");
	}
	eat() {
		console.log("eat");
	}
}

class Engineer1 extends Person1 {
	constructor(name, branch) {
		console.log("Entered in child constructor");
		super(name); // comment this line to see the error
		//in order to pass any value to parent class from child class we have to use super keyword.
		this.branch = branch;
		console.log(name, branch, "This is a child constructor");
		console.log("Exited from child constructor");
	}
	work() {
		super.eat(); //we can inherit methods from parent class to children class using super keyword.
		console.log("iam a engineer");
	}
}

let newEng = new Engineer1("sohail", "chemical");

//Execution Flow:- 125 --> 126 --> 127 --> 114,115,116,117 --> 129 --> 130....so on

//`Practise````````````````````````````````````````````````````````````````````````
// Qs. You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.
// Qs. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.
class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
	viewData(data) {
		this.data = data;
		console.log(data, "website data viewed");
	}
}

class Admin extends User {
	constructor(name, email) {
		super(name, email);
	}
	editData(data) {
		super.viewData(data);
		console.log(data);
	}
}

let user1 = new Admin("sohail", "sohail@abc.com");
user1.editData("new data");

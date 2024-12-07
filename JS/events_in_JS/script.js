// Events handled in JS file have more priprity than inline event handlers
let submitBtn = document.querySelector("#submitBtn");
let a = 25;
submitBtn.onclick = () => {
	console.log("Event fired 1");
	a++;
	console.log(a);
};
submitBtn.onclick = () => {
	console.log("Event fired 2");
};
let textBox = document.querySelector("#textBox");
textBox.onmouseover = () => {
	console.log("Mouse Over detected");
};

//If same event is added to the same element, then only last one will be executed.

// Event Objects in JS
// Event object is passed as an argument to the event handler function and it contains all the information about the event. It is used to get the information about the event like type of event, target element, mouse position, etc.

let ptag = document.querySelector("#ptag");
ptag.onclick = (e) => {
	console.log(e.type);
	console.log(e.target);
	console.log(e.clientX, e.clientY);
};

ptag.onmouseover = (e) => {
	console.log(e);
	console.log(e.type);
	console.log(e.target);
	console.log(e.clientX, e.clientY);
};

// addEventListener
// addEventListener() is used to add an event listener to an element. we can write multiple event listeners for the same event on the same element which we cant do with inline event handlers.

let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
	console.log("Add event listener is working");
});

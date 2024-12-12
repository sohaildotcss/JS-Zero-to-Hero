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
	console.log("Add event listener is working 1");
});

btn.addEventListener("click", () => {
	console.log("Add event listener is working 2");
});

// btn.addEventListener("click", () => {
// 	console.log("Add event listener is working 3");
// });

//we can also use removeEventListener() to remove the event listener from the element.

btn.removeEventListener("click", () => {
	console.log("Add event listener is working 3");
}); // this will not work because we are passing a new function reference which is not the same as the function reference which we passed while adding the event listener.

// to remove the event listener, we need to pass the same function reference which we passed while adding the event listener.

let clickHandler3 = () => {
	console.log("Add event listener is working 3");
};
btn.addEventListener("click", clickHandler3);
btn.removeEventListener("click", clickHandler3);

//light mode and dark mode toggle
let themeBtn = document.querySelector("#theme");
let initialMode = "black";
let body = document.querySelector("body");

// themeBtn.addEventListener("click", () => {
// 	if (initialMode === "black") {
// 		body.style.backgroundColor = "white";
// 		initialMode = "white";
// 	} else {
// 		body.style.backgroundColor = "black";
// 		initialMode = "black";
// 	}
// });

//or

themeBtn.addEventListener("click", () => {
	if (initialMode === "black") {
		body.classList.add("light");
		body.classList.remove("dark");
		initialMode = "white";
	} else {
		body.classList.add("dark");
		body.classList.remove("light");
		initialMode = "black";
	}
});

//



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
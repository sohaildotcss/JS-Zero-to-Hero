let boxes = document.querySelectorAll(".box");
let winnerText = document.querySelector("#winner-text");
let winPatterns = [
	[0, 3, 6], //vertical
	[1, 4, 7], //vertical
	[2, 5, 8], //vertical
	[0, 1, 2], //horizontal
	[3, 4, 5], //horizontal
	[6, 7, 8], //horizontal
	[0, 4, 8], //diagonal
	[2, 4, 6], //diagonal
];

const test = (event) => {
	const box = event.target;
	if (initialPlayer === "cross") {
		box.innerHTML = "X";
		initialPlayer = "circle";
		box.disabled = "true";
		box.style.color = "#758bfd";
	} else {
		box.innerHTML = "O";
		initialPlayer = "cross";
		box.disabled = "true";
		box.style.color = "#e09f3e";
	}
	checkWinner();
};

let initialPlayer = "cross";
boxes.forEach((box) => {
	box.addEventListener("click", test);
});

const checkWinner = () => {
	for (pattern of winPatterns) {
		let pos1 = boxes[pattern[0]];
		let pos2 = boxes[pattern[1]];
		let pos3 = boxes[pattern[2]];
		if (pos1.innerText != "" && pos2.innerText != "" && pos3.innerText != "") {
			if (
				pos1.innerText == pos2.innerText &&
				pos2.innerText == pos3.innerText
			) {
				console.log(pos1.value);
				winnerText.innerText = `The winner is ${pos1.value}`;
				disableButtons();
			}
		}
	}
};

//disable all buttons after the winner is declared
const disableButtons = () => {
	boxes.forEach((box) => {
		box.removeEventListener("click", test);
		box.style.backgroundColor = "#f1faee";
		box.style.border = "none";
		// box.style.boxShadow = "none";
		box.style.cursor = "auto";
	});
};

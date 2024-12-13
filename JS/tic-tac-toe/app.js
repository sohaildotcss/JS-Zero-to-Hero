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

//turns between player 1 and player 2
let initialPlayer = "cross";
boxes.forEach((box) => {
	box.addEventListener("click", () => {
		if (initialPlayer === "cross") {
			box.innerHTML = "X";
			initialPlayer = "circle";
			box.disabled = "true";
			box.style.color = "#758bfd";
			resetBtn.innerText = "Reset Game";
		} else {
			box.innerHTML = "O";
			initialPlayer = "cross";
			box.disabled = "true";
			box.style.color = "#e09f3e";
		}
		checkWinner();
	});
});

const checkWinner = () => {
	for (pattern of winPatterns) {
		let pos1 = boxes[pattern[0]].innerText;
		let pos2 = boxes[pattern[1]].innerText;
		let pos3 = boxes[pattern[2]].innerText;
		if (pos1 != "" && pos2 != "" && pos3 != "") {
			if (pos1 == pos2 && pos2 == pos3) {
				winnerText.innerText = `The Winner is "${pos1}"`;
				disableButtons();
			}
		}
	}
};

//disable all buttons after the winner is declared
const disableButtons = () => {
	for (box of boxes) {
		box.disabled = true;
		box.style.backgroundColor = "#f1faee";
		box.style.border = "none";
		box.style.cursor = "auto";
	}
};

//reset the game
let resetBtn = document.querySelector("#reset-button");
resetBtn.addEventListener("click", () => {
	location.reload();
});

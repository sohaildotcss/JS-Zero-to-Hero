let choices = document.querySelectorAll(".choices");
let winnerText = document.querySelector(".winner-text");
let winner = document.querySelector(".winner");
let user_score = document.querySelector(".user-score");
let computer_score = document.querySelector(".computer-score");
let userScore = 0;
let computerScore = 0;

choices.forEach((choice) => {
	choice.addEventListener("click", () => {
		let userChoice = choice.getAttribute("id");
		let compChoice = randomComputerChoice();
		let userWin = false;
		if (userChoice === compChoice) {
			userWin = "Draw";
		} else if (userChoice === "rock") {
			// compChoice can be paper or scissor
			userWin = compChoice === "paper" ? false : true;
		} else if (userChoice === "paper") {
			// compChoice can be rock or scissor
			userWin = compChoice === "rock" ? true : false;
		} else {
			// compChoice can be rock or paper
			userWin = compChoice === "rock" ? false : true;
		}
		winChecker(userWin, userChoice, compChoice);
	});
});

const randomComputerChoice = () => {
	let choices = ["rock", "paper", "scissors"];
	let test = Math.floor(Math.random() * 3);
	return choices[test];
};
const winChecker = (userWin, userChoice, compChoice) => {
	if (userWin === true) {
		winner.innerText = "You Won 🎉";
		winner.style.backgroundImage =
			"linear-gradient(rgb(111, 238, 141), rgb(23, 201, 100))";
		userScore++;
	} else if (userWin === false) {
		winner.innerText = "Computer Won  :(";
		winner.style.backgroundImage =
			"linear-gradient(rgb(255, 112, 91), rgb(255, 180, 87))";
		computerScore++;
	} else {
		winner.innerText = "Game is draw. Play again!";
		winner.style.backgroundImage =
			"linear-gradient(45deg, #be4146 87%, #d26764 53%, #f2acac 17%)";
	}
	winnerText.innerText = `you chose "${userChoice}" and computer chose "${compChoice}"`;
	user_score.innerText = `User score: ${userScore}`;
	computer_score.innerText = `Computer score: ${computerScore}`;
};

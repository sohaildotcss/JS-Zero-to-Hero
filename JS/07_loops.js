for (let i = 0; i <= 100; i++) {
	if (i % 2 == 0) {
		console.log(i);
	}
}

let i = 0;
while (i <= 100) {
	if (i % 2 == 0) {
		console.log("i = ", i);
	}
	i++;
}

let j = 0;
do {
	if (j % 2 == 0) {
		console.log(j);
	}
	j++;
} while (j <= 100);

let randNum = 8;
let userNum = prompt("Enter a number");
while (randNum != userNum) {
	if (userNum > randNum) {
		userNum = prompt("Choose a lower number");
	} else {
		userNum = prompt("Choose a higher number");
	}
}
alert("You have guessed correct number");

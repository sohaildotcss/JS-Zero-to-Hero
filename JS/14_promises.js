//* Callback Hell

function getData(data, getNextData) {
	setTimeout(() => {
		console.log(data);
		if (getNextData) {
			getNextData();
		}
	}, 2000);
}

getData(1, () => {
	getData(2);
});

// we will get data 1 after 2sec and then after 2sec we will get data 2.
// Similiarly we can get further data using nested callbacks as shown below

// function getData(data, getNextData) {
// 	setTimeout(() => {
// 		console.log(data);
// 		if (getNextData) {
// 			getNextData();
// 		}
// 	}, 2000);
// }

// getData(1, () => {
// 	getData(2, () => {
// 		getData(3, () => {
// 			getData(4, () => {
// 				getData(5);
// 			});
// 		});
// 	});
// });

//!This is called Callback hell, where the callbacks nested inside callbacks.

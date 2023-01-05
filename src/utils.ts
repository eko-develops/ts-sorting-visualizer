const DELAY = 50;

export function getRandomNum(min: number = -1000, max: number = 1000): number {
	return Math.floor(Math.random() * (max - min)) + min;
}

export function delay(time: number = DELAY) {
	return new Promise(function (resolve) {
		setTimeout(resolve, time);
	});
}

// function testSortingAlgs() {
// 	const size = 10;

// 	// create an array size of 10 with random values from 1 to 100, 50 times
// 	for (let i = 0; i < 50; i++) {
// 		const data = [];
// 		const randomArray = createArray(size, 1, 100); // random arrays of size 10 - 100, -1000 - 1000
// 		data.push(randomArray);

// 		const [correctSortResult] = data.map((array) =>
// 			array.slice().sort((a, b) => a - b)
// 		);
// 		const [bubbleSortResult] = data.map((array) => bubbleSort(array.slice()));

// 		// if (!isAnswerSorted(correctSortResult, bubbleSortResult)) {
// 		// 	console.log('bubbleSort failed');
// 		// 	console.log({
// 		// 		correctSortResult,
// 		// 		simpleSortResult,
// 		// 	});
// 		// 	break;
// 		// }
// 	}
// }

// function isAnswerSorted(correctSortResult: number[], sortResult: number[]) {
// 	const result = correctSortResult.map((sortedArray, index) => {
// 		if (correctSortResult[index] === sortResult[index]) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	});

// 	return result.every((el) => el == true);
// }

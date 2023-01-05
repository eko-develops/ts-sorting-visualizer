import { bubbleSort } from './algorithms';

const DELAY = 50;

export function getRandomNum(min: number = -1000, max: number = 1000): number {
	return Math.floor(Math.random() * (max - min)) + min;
}

export function delay(time: number = DELAY) {
	return new Promise(function (resolve) {
		setTimeout(resolve, time);
	});
}

/**
 * This function will clear then display the bars within the bars container.
 * It will use the values in the array to set the height and also set the value as a dataset
 */
export function displayBars(array: HTMLDivElement[]) {
	// clear bars
	const barsContainer = document.querySelector('.bars') as HTMLElement;
	barsContainer.innerHTML = '';

	for (const value of array) {
		barsContainer.appendChild(value);
	}
}

export function createBars(
	size: number,
	minValue: number,
	maxValue: number
): HTMLDivElement[] {
	const array = [];

	for (let i = 0; i < size; i++) {
		const randomValue = getRandomNum(minValue, maxValue);
		const barEl = document.createElement('div');
		barEl.classList.add('bar');
		barEl.dataset.value = randomValue.toString();
		barEl.style.height = `${randomValue * 2}px`;
		array.push(barEl);
	}

	return array;
}

export function startSearch(array: HTMLDivElement[]) {
	const option = document.querySelector('#sort-option') as HTMLSelectElement;
	const value = option.value;
	console.log(value);

	switch (value) {
		case 'bubbleSort':
			bubbleSort(array);
			break;
		default:
			break;
	}
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

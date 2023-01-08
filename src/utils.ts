import { bubbleSort, insertionSort } from './algorithms';

const DEFAULT_DELAY = 1000;

/**
 *
 * @param min Default -1000. Minimum number for range.
 * @param max Default 1000. Maximum number for range.
 * @returns Random number between minimum and maximum.
 */
export function getRandomNum(min: number = -1000, max: number = 1000): number {
	return Math.floor(Math.random() * (max - min)) + min;
}

export function delay(time: number = DEFAULT_DELAY) {
	return new Promise(function (resolve) {
		setTimeout(resolve, time);
	});
}

/**
 * Appends each HTML Div element to the bars container.
 * @param array An array of HTML Div elements
 */
export function displayBars(array: HTMLDivElement[]) {
	// clear bars
	const barsContainer = document.querySelector('.bars') as HTMLElement;
	barsContainer.innerHTML = '';

	for (const value of array) {
		barsContainer.appendChild(value);
	}
}

/**
 * Create HTML Div elements depending on arguments.
 * @param amount The amount of HTML div bars to create.
 * @param minValue Minimum value of the bar.
 * @param maxValue Maxiumum value of the bar.
 * @returns Array of HTML Div elements each representing a bar.
 */
export function createBars(
	amount: number,
	minValue?: number,
	maxValue?: number
): HTMLDivElement[] {
	const array = [];

	for (let i = 0; i < amount; i++) {
		const randomValue = getRandomNum(minValue, maxValue);
		const barEl = document.createElement('div');
		barEl.classList.add('bar');
		barEl.dataset.value = randomValue.toString();
		barEl.style.height = `${randomValue * 2}px`;
		array.push(barEl);
	}

	return array;
}

/**
 * Start the sorting algorithm search depending on select option.
 * @param array An array of HTML Div elements.
 */
export function startSearch(array: HTMLDivElement[]) {
	const option = document.querySelector('#sort-option') as HTMLSelectElement;
	const value = option.value;
	console.log(value);

	switch (value) {
		case 'bubbleSort':
			bubbleSort(array);
			break;
		case 'insertionSort':
			insertionSort(array);
			break;
		default:
			break;
	}
}

export function selectDiv(div: HTMLDivElement, value: number) {
	div.classList.add('selected');
	div.innerText = value.toString();
}

export function deselectDiv(div: HTMLDivElement) {
	div.classList.remove('selected');
	div.innerText = '';
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

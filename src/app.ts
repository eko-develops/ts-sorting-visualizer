/**
Issues:

flow: randomize -> start search
- randomize creates a new array but does not pass it to the other functions
so loop will run but it will not be running/displaying the correct array


*/

import { delay, getRandomNum } from './utils';

const MAX_ARRAY_SIZE = 20;

main();

function main() {
	let globalArray: HTMLDivElement[] = createBars(MAX_ARRAY_SIZE, 1, 100);
	displayBars(globalArray);

	const randomizeButton = document.querySelector(
		'#randomize'
	) as HTMLButtonElement;

	randomizeButton.addEventListener('click', () => {
		globalArray = createBars(MAX_ARRAY_SIZE, 1, 100);
		displayBars(globalArray);
	});

	// start button click
	const searchButton = document.querySelector('#search') as HTMLButtonElement;
	searchButton.addEventListener('click', () => startSearch(globalArray));

	// testSortingAlgs();
}

function startSearch(array: HTMLDivElement[]) {
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

/**
 * This function will clear then display the bars within the bars container.
 * It will use the values in the array to set the height and also set the value as a dataset
 */
function displayBars(array: HTMLDivElement[]) {
	// clear bars
	const barsContainer = document.querySelector('.bars') as HTMLElement;
	barsContainer.innerHTML = '';

	for (const value of array) {
		barsContainer.appendChild(value);
	}
}

function createBars(
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

async function bubbleSort(array: HTMLDivElement[]) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			await delay();

			if (array[j] > array[j + 1]) {
				const temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}

			displayBars(array);

			await delay();
		}
	}

	// return array;
}

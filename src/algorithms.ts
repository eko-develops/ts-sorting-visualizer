import { delay, deselectDiv, displayBars, selectDiv } from './utils';

export async function bubbleSort(array: HTMLDivElement[]) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			/**
			 * We want to show the sorting actually happening.
			 * First select the elements we are comparing and wait so
			 * we can see before they move
			 */
			selectDiv(array[j], 1);
			selectDiv(array[j + 1], 2);

			await delay();

			if (Number(array[j].dataset.value) > Number(array[j + 1].dataset.value)) {
				const temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}

			displayBars(array);
			await delay();

			/**
			 * Deslect elements after displaying
			 */
			deselectDiv(array[j]);
			deselectDiv(array[j + 1]);
		}
	}
}

export async function insertionSort(array: HTMLDivElement[]) {
	for (let i = 1; i < array.length; i++) {
		const temp = array[i];

		selectDiv(temp, 'T', true);
		await delay(2000);

		for (let j = i - 1; j >= 0; j--) {
			selectDiv(array[j], '1');
			selectDiv(array[j + 1], '2');

			if (Number(array[j].dataset.value) > Number(temp.dataset.value)) {
				temp.classList.remove('temp');
				array[j + 1] = array[j];
				array[j] = temp;
			}
			await delay();

			displayBars(array);

			await delay();

			array[j + 1].classList.remove('temp');
			deselectDiv(array[j]);
			deselectDiv(array[j + 1]);
		}
	}
}

// function selectionSort(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		let min = i;
// 		for (let j = i + 1; j < array.length; j++) {
// 			if (array[min] > array[j]) {
// 				min = j;
// 			}
// 		}
// 		let temp = array[i];
// 		array[i] = array[min];
// 		array[min] = temp;
// 	}

// 	return array;
// }

// function simpleSort(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = i + 1; j < array.length; j++) {
// 			if (array[j] < array[i]) {
// 				const temp = array[j];
// 				array[j] = array[i];
// 				array[i] = temp;
// 			}
// 		}
// 	}

// 	return array;
// }

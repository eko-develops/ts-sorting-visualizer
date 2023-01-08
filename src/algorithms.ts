import { delay, displayBars } from './utils';

export async function bubbleSort(array: HTMLDivElement[]) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			/**
			 * We want to show the sorting actually happening.
			 * First select the elements we are comparing and wait so
			 * we can see before they move
			 */
			array[j].classList.add('selected');
			array[j].innerText = '1';
			array[j + 1].classList.add('selected');
			array[j + 1].innerText = '2';
			await delay();

			if (Number(array[j].dataset.value) > Number(array[j + 1].dataset.value)) {
				/**
				 * when we swap, we will also wait so we can see the swap
				 */
				const temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				displayBars(array);
				await delay();
			}

			/**
			 * Selection removed regardless of what happens
			 */
			array[j].classList.remove('selected');
			array[j + 1].classList.remove('selected');
			array[j].innerText = '';
			array[j + 1].innerText = '';
		}
	}
}

// function insertionSort(array) {
// 	for (let i = 1; i < array.length; i++) {
// 		const temp = array[i];

// 		for (let j = i - 1; j >= 0; j--) {
// 			if (array[j] > temp) {
// 				array[j + 1] = array[j];
// 				array[j] = temp;
// 			}
// 		}
// 	}
// 	return array;
// }

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

export {};
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

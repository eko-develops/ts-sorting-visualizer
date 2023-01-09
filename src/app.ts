import { createBars, displayBars, startSearch } from './utils';

const MAX_ARRAY_SIZE = 20;

main();

function main() {
	let globalArray: HTMLDivElement[] = createBars(MAX_ARRAY_SIZE, 1, 100);
	displayBars(globalArray);

	document.querySelector('#randomize')!.addEventListener('click', () => {
		globalArray = createBars(MAX_ARRAY_SIZE, 1, 100);
		displayBars(globalArray);
	});

	document
		.querySelector('#search')!
		.addEventListener('click', () => startSearch(globalArray));
}

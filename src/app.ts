import { createBars, displayBars, startSearch } from './utils';

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

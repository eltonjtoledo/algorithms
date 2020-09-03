const list = [1, 5, 2, 83, 8, 30, 57, 34, 09, 16];

// Bubble sort
function BubbleSorting(values) {
	let aux;
	let cont = true;
	for (let i = 0; i < values.length; i++) {
		if (values[i] > values[i + 1]) {
			aux = values[i];
			values[i] = values[i + 1];
			values[i + 1] = aux;
			cont = false;
		}
	}
	if (cont != true) {
		BubbleSorting(values);
	}
	return values;
}
//console.log(BubbleSorting(list));

// Selection Sort
function SelectionSort(values) {
	for (let i = 0; i < values.length; i++) {
		let lower = values[i];
		for (let e = 0; e < values.length; e++) {
			if (values[e] > lower) {
				lower = values[e];
				values[e] = values[i]
				values[i] = lower;
			}

		}
	}
	return values;
}
// console.log(SelectionSort(list));

// Insertion Sort
function InsertionSort(values) {
	let aux;
	for (let i = 1; i < values.length; i++) {
		let current = values[i];
		let j = i - 1;

		while (j >= 0 && values[j] > current) {
			aux = values[j + 1];
			values[j + 1] = values[j];
			values[j] = aux;
			j = j - 1;
		}
		values[j + 1] = current;
	}
	return values;
}
// console.log(InsertionSort(list));

// To create an array with 100 random positions
const generated = [];
for (let i = 0; i < 100;) {
	const value = Math.floor(Math.random() * 100 + 1);
	if (!generated.includes(value)) {
		generated.push(value);
		i++;
	}
}

console.log(generated ,InsertionSort(generated))









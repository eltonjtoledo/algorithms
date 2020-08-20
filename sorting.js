const valuesa = [1, 5, 2, 8, 30, 57, 34, 09, 16, 83];

// Bubble sort
function BubbleSorting(values){
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
console.log(BubbleSorting(valuesa));


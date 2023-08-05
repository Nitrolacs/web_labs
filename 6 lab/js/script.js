function sumElements(arr) {
	let sum = 0;
	for (index = 0; index < arr.length; ++index) {
		sum += arr[index];
	}
	return sum;
}

function minElement(arr) {
	// ... - оператор spread, расширяет массив на отдельные элементы.
	return Math.min(...arr);
}

function prodElements(arr) {
	let product = 1;
	for (index = 0; index < arr.length; ++index) {
		product *= arr[index];
	}
	return product;
}

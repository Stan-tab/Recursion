const unsortedArr = [105, 79, 564, 100, 110, 11, 64];

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	if (arr.length == 2 && !Array.isArray(arr[0])) {
		return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
	}
	if (!Array.isArray(arr[0])) {
		const sorted = [
			mergeSort(arr.slice(0, arr.length / 2)),
			mergeSort(arr.slice(arr.length / 2)),
		];
		return sorter(sorted[0], sorted[1]);
	}
}

function sorter(arr1, arr2) {
	let newArr = [];
	for (let i = 0; i < arr1.length; i++) {
		let prevLength = [arr2.length, arr2.length];
		let l = 0;
		while (arr2.length !== 0 && arr1.length !== 0) {
			if (prevLength[1] !== arr2.length) {
				prevLength[1] = arr2.length;
				l -= 1;
			}
			if (prevLength[0] !== arr1.length) {
				prevLength[0] = arr1.length;
				l = 0;
			}
			if (arr1[i] > arr2[l]) {
				newArr.push(...arr2.splice(l, 1));
			} else if (arr1[i] === arr2[l]) {
				newArr = newArr.concat([
					...arr1.splice(i, 1),
					...arr2.splice(l, 1),
				]);
			} else {
				newArr.push(...arr1.splice(i, 1));
			}
			++l;
		}
	}
	if (arr2.length === 0) return newArr.concat(arr1);
	if (arr1.length === 0) return newArr.concat(arr2);
	return newArr;
}

// console.log(sorter([3, 4, 6, 8], [1, 2, 3]));
console.log(mergeSort(unsortedArr));

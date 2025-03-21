const unsortedArr = [105, 79, 564, 100, 110, 11, 64];

function mergeSortIter(arr) {
	if (arr.length <= 1) return arr;
	if (arr.length == 2 && !Array.isArray(arr[0])) {
		return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
	}
	if (!Array.isArray(arr[0])) {
		const sorted = [
			mergeSortIter(arr.slice(0, arr.length / 2)),
			mergeSortIter(arr.slice(arr.length / 2)),
		];
		return sorter(sorted[0], sorted[1]);
	}
}

function sorter(arr1, arr2) {
	let newArr = [];
	while (arr2.length !== 0 && arr1.length !== 0) {
		if (arr1[0] > arr2[0]) {
			newArr.push(arr2.shift());
		} else if (arr1[0] === arr2[0]) {
			newArr = newArr.concat([arr1.shift(), arr2.shift()]);
		} else {
			newArr.push(arr1.shift());
		}
	}
	return [...newArr, ...arr1, ...arr2];
}

function sorterRec(arr1, arr2) {
	let newArr = [];
	if (arr2.length === 0 || arr1.length === 0)
		return [...newArr, ...arr1, ...arr2];
	if (arr1[0] > arr2[0]) {
		newArr.push(arr2.shift());
	} else if (arr1[0] === arr2[0]) {
		newArr = newArr.concat([arr1.shift(), arr2.shift()]);
	} else {
		newArr.push(arr1.shift());
	}
	return [...newArr, ...sorterRec(arr1, arr2)];
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	if (arr.length == 2 && !Array.isArray(arr[0])) {
		return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
	} else if (arr.length == 2) {
		let newArr = [];
		if (arr[0].length === 0 || arr[1].length === 0)
			return [...arr[0], ...arr[1]];
		if (arr[0][0] > arr[1][0]) {
			newArr.push(arr[1].shift());
		} else if (arr[0][0] === arr[1][0]) {
			newArr = newArr.concat([arr[0].shift(), arr[1].shift()]);
		} else {
			newArr.push(arr[0].shift());
		}
		return [...newArr, ...mergeSort(arr)];
	}
	if (!Array.isArray(arr[0])) {
		const sorted = [
			mergeSort(arr.slice(0, arr.length / 2)),
			mergeSort(arr.slice(arr.length / 2)),
		];
		return mergeSort(sorted);
	}
}

console.log(sorter([3, 4, 6, 8], [1, 2, 3]));
console.log(sorterRec([3, 4, 6, 8], [1, 2, 3]));
console.log(mergeSort(unsortedArr));
console.log(mergeSortIter(unsortedArr));

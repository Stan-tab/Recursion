function fibIter(num) {
	if (num == 0 || num == undefined) return [];
	if (num == 1) return [0];
	const arr = [0, 1];
	for (let i = 1; i < num - 1; i++) {
		arr.push(arr[i - 1] + arr[i]);
	}
	return arr;
}

function fibRec(num) {
	const fib = (n) => {
		if (n < 2) return n;
		return fib(n - 1) + fib(n - 2);
	};
	if (num > 1) return fibRec(num - 1).concat([fib(num - 1)]);
	return [0];
}

console.log(fibIter(8));
console.log(fibRec(8));

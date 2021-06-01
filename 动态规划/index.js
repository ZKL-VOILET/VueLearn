function arrSum(arr) {
	let max = arr[0];
	let sum = arr[0];
	for (let i = 1; i < arr.length; i++) {
		sum = Math.max(sum + arr[i], arr[i]);
		if (sum >= max) {
			max = sum;
		}
	}
	return max;
}

console.log(arrSum([6, -1, 3, -4, -6, 9, 2, -2, 5]));

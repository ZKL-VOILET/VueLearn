const app = new Vue({
	el: "#app",
});
/**
 * filter函数对数组里每个元素进行判断
 * para:一个回调函数，返回boolearn值
 */
const nums = [10, 20, 50, 11, 222, 333];
let newnums = [];
newnums = nums.filter(function (num) {
	return num < 100;
});
console.log(newnums);

/**
 * map函数对数组里每个元素执行回调函数
 */

let new2nums = newnums.map(function (num) {
	return num * 2;
});
console.log(new2nums);

/**
 * reduce函数对数组求和
 * para:previousValue是上次执行的返回值
 * currentValue:当前值
 * currentIndex：当前值的索引
 * array：当前数组
 */
let total = new2nums.reduce(function (
	previousValue,
	currentValue,
	currentIndex,
	array
) {
	console.log(previousValue, currentValue, currentIndex, array);
	return previousValue + currentValue;
},
0);
console.log(total);

let test = nums
	.filter(function (num) {
		return num < 100;
	})
	.map(function (num) {
		return num * 2;
	})
	.reduce(function (previousValue, num) {
		return previousValue + num;
	}, 0);
console.log(test);
/* 用箭头函数简化  */
let test1 = nums
	.filter((num) => num < 100)
	.map((num) => num * 2)
	.reduce((pre, num) => pre + num);
console.log(test1);

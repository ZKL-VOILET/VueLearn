/*
函数柯里化，实现以下代码
sum(1,2)(2)() // 5
sum(3)(3)()  // 6
*/

// function sum(...args1) {
// 	// 求和
// 	let x = args1.reduce((prev, next) => {
// 		return prev + next;
// 	});
// 	return function (...args2) {
// 		if (args2.length == 0) return x;
// 		// 求和
// 		let y = args2.reduce((prev, next) => {
// 			return prev + next;
// 		});
// 		return sum(x + y);
// 	};
// }
// // 测试
// console.log(sum(1, 2, 2)(5)());

function curry(fn, args) {
	var length = fn.length;

	args = args || [];

	return function () {
		var _args = args.slice(0),
			arg,
			i;

		for (i = 0; i < arguments.length; i++) {
			arg = arguments[i];

			_args.push(arg);
		}
		// 参数达到要求，或者传入空参数时
		if (arguments.length === 0 || _args.length >= length) {
			return fn.apply(this, _args);
		} else {
			return curry.call(this, fn, _args);
		}
	};
}

function add(x, y, z) {
	const args = [...arguments];
	return args.reduce((prev, next) => {
		return prev + next;
	});
}

var fn = curry(add);

console.log(fn(1, 2)());
console.log(fn(1, 2)(3));

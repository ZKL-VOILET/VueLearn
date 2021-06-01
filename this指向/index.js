const obj1 = {
	obj: {
		id: 2,
		aaa() {
			setTimeout(function () {
				console.log(this.id);
			});
			setTimeout(() => {
				console.log(this.id, this);
			});
		},
	},
	id: 3,
};

obj1.obj.aaa();

var len = 10;
function fn() {
	return this.len + 1;
}

const obj = {
	len: 5,
	test1: function () {
		return fn();
	},
};

obj.test2 = fn;
console.log(obj.test1());
console.log(obj.test2() === fn());

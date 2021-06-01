const obj = {
	foo: 1,
	bar: {
		a: () => {
			return "wow";
		},
		b: Symbol("b"),
	},
};

function toSafeObject(obj) {
	if (typeof obj !== "object") {
		return obj;
	}
	const handler = {
		get: function (obj, name) {
			if (obj.hasOwnProperty(name)) {
				return obj[name];
			} else {
				return new Proxy({}, handler);
			}
		},
		apply: function (obj, ctx, args) {
			// return obj.apply(ctx, args);
			// Reflect是js内置对象，它提供拦截 JavaScript 操作的方法
			return Reflect.apply(...arguments);
		},
	};
	return new Proxy(obj, handler);
}

const safeObj = toSafeObject(obj);
console.log(safeObj.foo1);
console.log(safeObj.bar.a());

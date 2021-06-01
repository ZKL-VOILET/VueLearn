// 防抖：触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
function debounce(fn, wait = 500) {
	// 创建一个标记用来存放定时器的返回值
	let timer = null;
	const _this = this;
	return function () {
		// 每当触发函数的时候 ，把前一个setTimeout clear 掉

		clearTimeout(timer);
		// 然后重新建一个延时器触发, 这样就实现了最后一次调用
		timer = setTimeout(() => {
			fn.apply(_this, arguments);
		}, wait);
	};
}

function testDebounce() {
	console.log("测试防抖成功", arguments);
}
const testDebounceFn = debounce(testDebounce, 1000); // 防抖函数
document.onmousemove = function (e) {
	testDebounceFn(e); // 给防抖函数传参
};

// 节流：高频触发某个事件，在n秒内只会执行一次
function throttle(fn, delay) {
	var timer;
	return function () {
		var _this = this;
		var args = arguments;
		if (timer) {
			return;
		}
		timer = setTimeout(function () {
			fn.apply(_this, args);
			timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
		}, delay);
	};
}
function testThrottle(e, content) {
	console.log(e, content);
}
const testThrottleFn = throttle(testThrottle, 1000); // 节流函数
document.onmousemove = function (e) {
	testThrottleFn(e, "throttle"); // 给节流函数传参
};

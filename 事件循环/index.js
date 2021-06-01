//请写出输出内容
async function a1() {
	console.log("a1 start");
	await a2();
	console.log("a1 end"); //微2
}
async function a2() {
	console.log("a2");
}

console.log("script start");

setTimeout(() => {
	console.log("setTimeout"); // 宏1
}, 0);

Promise.resolve().then(() => {
	console.log("promise1"); // 微1
});

a1();

Promise.resolve("test")
	.then(() => {
		console.log("zkl");
	})
	.then(() => {
		console.log("zzz");
	});
console.log("script end");

/*
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
*/
/*
script start
async1 start
promise1
promise3
script end
promise2
async1 end
promise4
setTimeout
*/

/*
script start
async1 start
promise1
script end
promise2
settimeout3
21
*/

/*
script start
a1 start
a2
promise2
script end
promise1
a1 end
promise2.then
setTimeout
promise3
*/

const loaderUtils = require("loader-utils");
const loaderSchema = require("schema-utils");

/**
 *
 * @param {*} source 需要编译的资源文件
 * @returns
 * 所谓 loader 只是一个导出为函数的 JavaScript 模块。
 * loader runner 会调用这个函数，然后把上一个 loader 产生的结果或者资源文件(resource file)传入进去。
 * 函数的 this 上下文将由 webpack 填充.
 * 第一个 loader 的传入参数只有一个：资源文件(resource file)的内容。compiler 需要得到最后一个 loader 产生的处理结果。
 * 这个处理结果应该是 String 或者 Buffer（被转换为一个 string），代表了模块的 JavaScript 源码。另外还可以传递一个可选的 SourceMap 结果（格式为 JSON 对象）。
 * 如果是单个处理结果，可以在同步模式中直接返回。如果有多个处理结果，则必须调用 this.callback()。
 * 在异步模式中，必须调用 this.async()，来指示 loader runner 等待异步结果，它会返回 this.callback() 回调函数，随后 loader 必须返回 undefined 并且调用该回调函数。
 */

module.exports = function (source) {
	// console.log(this.query) 拿到配置参数
	const options = loaderUtils.getOptions(this);
	// Apply some transformations to the source...
	if (options) {
		// origin 要被替换的旧内容；replace 新内容
		source = source.replace(options.origin, options.replace);
	}
	// this.callback(null, source);
	return source;
};

// 一个可以同步或者异步调用的可以返回多个结果的函数。预期的参数是：
// this.callback(
//     err: Error | null,
//     content: string | Buffer,
//     sourceMap?: SourceMap,
//     meta?: any
// );

/**
 * Webpack的插件包括：
 * 命名的JavaScript函数或JavaScript类。
 * apply在其原型中定义方法。
 * 指定要利用的事件挂钩。
 * 处理webpack内部实例特定的数据。
 * 功能完成后，调用webpack提供的回调。
 */

// 生成一个版权文件
class CopyrightWebpackPlugin {
	constructor(options) {
		console.log("插件被使用了");
	}
	// 调用插件的时候会调用此方法
	// compiler 是webpack的实例
	apply(compiler) {
		// emit钩子是生成资源到 output 目录之前。异步钩子
		// compilation存放了这次打包的所有内容
		compiler.hooks.emit.tapAsync(
			"CopyrightWebpackPlugin",
			(compilation, callback) => {
				// 添加copyright.txt
				compilation.assets["copyright.txt"] = {
					source: function () {
						return "Copyright by zkl";
					},
					size: function () {
						// 文件大小,长度
						return 20;
					},
				};
				callback(); // 最后一定要调用
			}
		);
	}
}
module.exports = CopyrightWebpackPlugin;

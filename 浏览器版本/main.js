console.log(getBrowser());

function getBrowser() {
	const UserAgent = navigator.userAgent.toLowerCase();
	const browserInfo = {};
	const browserArray = {
		IE: window.ActiveXObject || "ActiveXObject" in window, // IE
		Chrome:
			UserAgent.indexOf("chrome") > -1 && UserAgent.indexOf("safari") > -1, // Chrome浏览器
		Firefox: UserAgent.indexOf("firefox") > -1, // 火狐浏览器
		Opera: UserAgent.indexOf("opera") > -1, // Opera浏览器
		Safari:
			UserAgent.indexOf("safari") > -1 && UserAgent.indexOf("chrome") == -1, // safari浏览器
		Edge: UserAgent.indexOf("edge") > -1, // Edge浏览器
		QQBrowser: /qqbrowser/.test(UserAgent), // qq浏览器
		WeixinBrowser: /MicroMessenger/i.test(UserAgent), // 微信浏览器
	};
	console.log(browserArray);
	for (let i in browserArray) {
		if (browserArray[i]) {
			let versions = "";
			if (i == "IE") {
				versions = UserAgent.match(/(msie\s|trident.*rv:)([\w.]+)/)[2];
			} else if (i == "Chrome") {
				for (let mt in navigator.mimeTypes) {
					//检测是否是360浏览器(测试只有pc端的360才起作用)
					if (
						navigator.mimeTypes[mt]["type"] == "application/360softmgrplugin"
					) {
						i = "360";
					}
				}
				versions = UserAgent.match(/chrome\/([\d.]+)/)[1];
			} else if (i == "Firefox") {
				versions = UserAgent.match(/firefox\/([\d.]+)/)[1];
			} else if (i == "Opera") {
				versions = UserAgent.match(/opera\/([\d.]+)/)[1];
			} else if (i == "Safari") {
				versions = UserAgent.match(/version\/([\d.]+)/)[1];
			} else if (i == "Edge") {
				versions = UserAgent.match(/edge\/([\d.]+)/)[1];
			} else if (i == "QQBrowser") {
				versions = UserAgent.match(/qqbrowser\/([\d.]+)/)[1];
			}
			browserInfo.type = i;
			browserInfo.versions = parseInt(versions);
		}
	}
	return browserInfo;
}

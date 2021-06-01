const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (socket) {
	console.log("a user connected");
	socket.on("disconnect", () => {
		console.log("user disconnect");
	});
});

http.listen(8000, function () {
	console.log("listening on *:8000");
});
console.log("process id", process.pid);

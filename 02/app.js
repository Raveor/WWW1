const http = require('http');
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	console.log(req.url);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	if(req.url.includes("index2")) {
		fs.readFile("./index2.html",function (err, data) {
			res.write(data);
			res.end();
		});
	} else if(req.url.includes("index")) {
		fs.readFile("./index.html",function (err, data) {
			res.write(data);
			res.end();
		});
	} else {
		fs.readFile("./default.html",function (err, data) {
			res.write(data);
			res.end();
		});
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
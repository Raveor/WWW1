const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(req.url == "/abc") {
    res.end("<p>JESTEM W /ABC</p>");
  } else {
    res.end("Nie wiem gdzie jestem....");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
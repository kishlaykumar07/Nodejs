const http = require('http');

const server = http.createServer((req, res) => {
  //res.end() used to send a response to an HTTP request. It indicates the end of the response stream and sends any optional data as the response body.  
  res.end('Hello, Node.js HTTP Server!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
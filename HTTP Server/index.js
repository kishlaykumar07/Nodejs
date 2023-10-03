const http = require('http');
const fs = require("fs");
const server = http.createServer((req, res) => {
  const log = `${ Date.now()} ${req.url} New Req Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
  //res.end() used to send a response to an HTTP request. It indicates the end of the response stream and sends any optional data as the response body.  
    res.end('Hello, Node.js HTTP Server!');
  });
  
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
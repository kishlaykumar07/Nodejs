const http = require('http');
const fs = require("fs");
const server = http.createServer((req, res) => {
  const log = `${ Date.now()} ${req.url} New Req Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
  //res.end() used to send a response to an HTTP request. It indicates the end of the response stream and sends any optional data as the response body.  
    
    switch(req.url) {
      case '/': res.end("Hompage");
      break
      case '/about': res.end("I am Kishlay");
      break;
      default: res.end('Hello, Node.js HTTP Server!');
    }
  });
  
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
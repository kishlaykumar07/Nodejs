// Creating server using EXPRESS
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Helo From Home Page");
});

app.get("/about", (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});

app.listen(3000, () => console.log("Server Started"))

//Creating server without using express
// const http = require('http');
// const fs = require("fs");
// const server = http.createServer(myHandler);
// function myHandler(req, res){

//   if(req.url === '/favicon.ico') return res.end();
//   const log = `${ Date.now()} ${req.method} ${req.url} New Req Received\n`;
//   fs.appendFile("log.txt", log, (err, data) => {
     
//   //res.end() used to send a response to an HTTP request. It indicates the end of the response stream and sends any optional data as the response body.  
//   if (err) {
//     console.error("An error occurred:", err);
//   } else {
//     console.log("Data appended successfully:", data);
//   } 
//     switch(req.url) {
//       case '/': 
//       if (req.method === "GET") res.end("Hompage");
//       break
//       case '/about': res.end("I am Kishlay");
//       break
//       case "/signup":
//         if(req.method === "GET") res.end("This is signup Form");
//         else if (req.method === "POST") {
//           //DB query
//           res.end("SUCCESS");
//         }
//       default: res.end('Hello, Node.js HTTP Server!');
//     }
//   });

// }
// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
const http = require("http");
const handles = require("./handles");
const server = http.createServer(handles.serverHandle);
server.listen(8080);
/*
1) console.log("hello node.js");

3)

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Hello world\n");
  })
  .listen(8080);

4)

const content =
  "<!DOCTYPE html>" +
  "<html>" +
  "    <head>" +
  '        <meta charset="utf-8" />' +
  "        <title>ECE AST</title>" +
  "    </head>" +
  "    <body>" +
  "       <p>Hello World!</p>" +
  "    </body>" +
  "</html>";

;

5)
All the content after "/" is printed in the terminal when we used ("parse...pathname");
6) 
In the terminal we have the name and the email differentiated as 'name'=.... and 'email'=...

*/

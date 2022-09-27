const http = require("http");
const handles = require("./handles");
/*
1) console.log("hello node.js");

2) const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Hello world\n");
  })
  .listen(8080);

3)

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

;*/

const server = http.createServer(handles.serverHandle);
server.listen(8080);

/*const url = require("url");
const qs = require("querystring");                                       This is for the part 3.8

module.exports = {
  serverHandle: function (req, res) {
    //const path = url.parse(req.url).pathname;
    //console.log(path);
    const queryParams = qs.parse(url.parse(req.url).query);
    console.log(queryParams);
    const route = url.parse(req.url);
    const path = route.pathname;
    const params = qs.parse(route.query);
    //res.write(content);
    //res.write(path);
    if (path === "/hello" && "name" in params) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      if (params["name"] == "ragavi") {
        res.write("Welcome Ragavi, this is your session !");
      } else {
        res.write("Hello " + params["name"]);
      }
    } else {
      res.writeHead(404);
      res.write("Not found");
    }
    res.end();
  },
};
*/

//last question for the file about.json
const fs = require("fs");
const path = require("path");

module.exports = {
  serverHandle: (req, res) => {
    fs.readFile(path.join(__dirname, "content", "about.json"), (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("This file doesn't exist");
      } else {
        res.writeHead(200, { "content-type": "text/json;charset=utf-8" });
        res.end(data);
      }
    });
  },
};

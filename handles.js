const url = require("url");
const qs = require("querystring");

module.exports = {
  serverHandle: function (req, res) {
    //const path = url.parse(req.url).pathname;
    //console.log(path);
    const queryParams = qs.parse(url.parse(req.url).query);
    console.log(queryParams);
    const route = url.parse(req.url);
    const path = route.pathname;
    const params = qs.parse(route.query);
    res.writeHead(200, { "Content-Type": "text/plain" });
    //res.write(content);
    //res.write(path);
    if (path === "/hello" && "name" in params) {
      if (params["name"] == "ragavi") {
        res.write("Welcome Ragavi !");
      } else {
        res.write("Hello " + params["name"]);
      }
    } else {
      res.write("404: Not found");
    }
    res.end();
  },
};

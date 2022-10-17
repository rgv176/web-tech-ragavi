const express = require("express");
const port = 3000;
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const routerArticles = require("./routes/articles");
const routerComments = require("./routes/comments");
app.use(bodyParser.json());
app.use("/articles", routerArticles);
app.use("/comments", routerComments);

app.listen(port, () => {
  console.log("app run");
});

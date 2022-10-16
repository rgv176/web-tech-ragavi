const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  const article = db.articles;
  res.send(article);
});

router.get("/:articleId", (req, res) => {
  const article = db.articles.find(
    (article) => article.id == req.params.articleId
  );
  if (article) res.send(article);
  else res.sendStatus(404);
});

module.exports = router;

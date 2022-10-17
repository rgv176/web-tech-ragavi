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

router.get("/:articleID/comments", (req, res) => {
  const comment = db.comments.find(
    (comment) => comment.articleId == req.params.articleID
  );
  if (comment) res.send(comment);
  else res.sendStatus(404);
});

module.exports = router;

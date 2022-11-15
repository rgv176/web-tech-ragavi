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

router.get("/:articleID/comments/:commentID", (req, res) => {
  const comment = db.comments.find(
    (comment) => comment.articleId == req.params.articleID
  );
  if (comment) {
    const com = db.comments.find((com) => com.id == req.params.commentID);
    if (com) res.send(com);
    else res.sendStatus(404);
  } else res.sendStatus(404);
});

/*router.post("/:articleID/comments", (req, res) => {
  const data = new db.comments({
    id: req.body.id,
    timestamp: req.body.timestamp,
    content: req.body.content,
    articleId: req.body.articleId,
    author: req.body.author,
  });
});

NOT WORKING*/

module.exports = router;

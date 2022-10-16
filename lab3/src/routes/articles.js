const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  const article = db.articles;
  res.send(article);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  const comment = db.comments;
  res.send(comment);
});

module.exports = router;

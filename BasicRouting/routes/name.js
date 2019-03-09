const path = require("path");
const express = require("express");
const dirpath = require("../utils/path");

const router = express.Router();

router.get("/user", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "user.html"));
});

module.exports = router;

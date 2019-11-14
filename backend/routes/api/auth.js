var router = require("express").Router();

// url: /auth/*

router.post("/signup", (req, res, next) => {
  res.send("TODO: POST  signup");
});

router.post("/login", (req, res, next) => {
  res.send("TODO: POST  login");
});

router.post("/logout", (req, res, next) => {
  res.send("TODO: POST  logout");
});

module.exports = router;

var router = require("express").Router();
var User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("config");

router.use("/api", require("./api"));
router.use("/admin", require("./admin"));

router.use("/", require("./api/auth"));

router.get("/", async (req, res) => {
  res.render("home", {
    user: req.user
  });
});

module.exports = router;

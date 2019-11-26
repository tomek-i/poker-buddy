var router = require("express").Router();
var User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("config");

router.use("/api", require("./api"));
router.use("/admin", require("./admin"));

router.use("/auth", require("./api/auth.js"));

router.get("/", async (req, res) => {
  const token =
    req.headers["x-access-token"] ||
    req.headers["authorization"] ||
    req.cookies.token;
  if (token) {
    try {
      //if can verify the token, set req.user and pass to next middleware

      const decoded = jwt.verify(token, config.get("secret"));
      req.user_id = decoded;
    } catch (ex) {}
  }
  if (!req.user && req.user_id) {
    req.user = await User.findById(req.user_id).select("-password");
  }
  res.render("home", {
    user: req.user
  });
});

module.exports = router;

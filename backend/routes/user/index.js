var router = require("express").Router();

// url: user/*

router.get("/", async (req, res, next) => {
  res.send("/");
});
router.get("/profile", async (req, res, next) => {
  const { user } = req;
  res.render("user/profile", { user: user });
});

module.exports = router;

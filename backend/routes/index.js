var router = require("express").Router();
var checkUser = require("../middlewares/checkUser");
var loadUser = require("../middlewares/loadUser");
var authenticated = require("../middlewares/authenticated");
var adminPermission = require("../middlewares/adminPermission");

//TODO: router.all("*") or router.all("/admin/*") to define middleware for specific route patterns
router.all("*", checkUser, loadUser);
router.all("/admin", authenticated, adminPermission);

router.use("/", require("./api/auth"));
router.use("/admin", require("./backend"));
router.use("/user", require("./user"));

router.use("/api", require("./api"));

router.get("/", async (req, res) => {
  //TODO: if there is a user, then we probably can redirect straigth away.
  res.render("index", {
    user: req.user
  });
});

router.get("/test", async (req, res) => {
  res.send({ message: "pass!" });
});

module.exports = router;

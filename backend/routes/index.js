var router = require("express").Router();

router.use("/", require("./api/auth"));
router.use("/api", require("./api"));
router.use("/admin", require("./backend"));

router.get("/", async (req, res) => {
  res.render("index");
});

router.get("/test", async (req, res) => {
  res.send({ message: "pass!" });
});

module.exports = router;

var router = require("express").Router();

router.use("/api", require("./api"));
router.get("/", (req, res) => {
  res.send("Hi");
});

module.exports = router;

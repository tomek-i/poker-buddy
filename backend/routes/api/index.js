var router = require("express").Router();

// url: api/*

router.use("/user", require("./user"));
router.use("/game", require("./game"));

module.exports = router;

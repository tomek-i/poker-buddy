var router = require("express").Router();

// url: api/*

router.use("/user", require("./users"));

module.exports = router;

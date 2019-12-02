var router = require("express").Router();

// url: admin/*

router.use("/", require("./admins"));
router.use("/users", require("./games"));
router.use("/games", require("./users"));

module.exports = router;

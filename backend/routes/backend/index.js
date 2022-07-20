var router = require("express").Router();

// url: admin/*

router.use("/", require("./admins"));
router.use("/games", require("./games"));
router.use("/users", require("./users"));

module.exports = router;

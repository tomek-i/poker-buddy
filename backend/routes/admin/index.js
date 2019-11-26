var router = require("express").Router();

// url: admin/*

router.use("/", require("./admins"));

module.exports = router;

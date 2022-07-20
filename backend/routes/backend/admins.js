var router = require("express").Router();
var admin_controller = require("../../controllers/adminController");

// url: admin/*

router.get("/", admin_controller.index);

module.exports = router;

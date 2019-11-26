var router = require("express").Router();
var admin_controller = require("../../controllers/adminController");
var auth = require("../../middlewares/auth");
var isAdmin = require("../../middlewares/isAdmin");

// url: admin/*

router.get("/", [auth, isAdmin], admin_controller.index);

module.exports = router;

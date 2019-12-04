var router = require("express").Router();
var controller = require("../../controllers/userController");

var auth = require("../../middlewares/authenticated");
var isAdmin = require("../../middlewares/adminPermission");

// url: admin/users/*

router.get("/", [auth, isAdmin], controller.index);
router.get("/:id", [auth, isAdmin], controller.findById);
router.get("/:username", [auth, isAdmin], controller.findByUsername);

router.post("/", [auth, isAdmin], controller.create);
router.put("/:id", [auth, isAdmin], controller.update);
router.delete("/:id", [auth, isAdmin], controller.delete);

module.exports = router;

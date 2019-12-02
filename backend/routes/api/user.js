var router = require("express").Router();
var controller = require("../../controllers/userController");
var auth = require("../../middlewares/auth");
var isAdmin = require("../../middlewares/isAdmin");

// url: api/user/*

router.get("/", controller.index);
router.get("/current", auth, controller.current);
router.get("/:username", controller.findByUsername);

router.post("/create", [auth, isAdmin], controller.create);
router.put("/:id", [auth, isAdmin], controller.update);
router.delete("/:id", [auth, isAdmin], controller.delete);
module.exports = router;

var router = require("express").Router();
var user_controller = require("../../controllers/userController");
var auth = require("../../middlewares/auth");
// url: api/user/*

router.get("/", user_controller.index);
router.get("/current", auth, user_controller.current);
router.get("/:username", user_controller.findByUsername);
router.post("/create", user_controller.create);
router.put("/:id", user_controller.update);
router.delete("/:id", user_controller.delete);
module.exports = router;
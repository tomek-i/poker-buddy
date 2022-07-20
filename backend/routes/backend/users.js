var router = require("express").Router();
var controller = require("../../controllers/userController");

// url: admin/users/*

router.get("/", controller.index);
router.get("/:id", controller.findById);
router.get("/:username", controller.findByUsername);

router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;

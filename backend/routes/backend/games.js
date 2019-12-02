var router = require("express").Router();
var controller = require("../../controllers/gameController");
var auth = require("../../middlewares/auth");
var isAdmin = require("../../middlewares/isAdmin");

// url: admin/games/*

router.get("/", [auth, isAdmin], controller.index);
router.post("/", [auth, isAdmin], controller.create);
router.get("/:id", [auth, isAdmin], controller.gameById);
router.put("/:id", [auth, isAdmin], controller.update);

module.exports = router;

var router = require("express").Router();
var controller = require("../../controllers/userController");
var auth = require("../../middlewares/auth");
var isAdmin = require("../../middlewares/isAdmin");

// url: api/user/*

router.get("/", controller.index);
router.get("/:username", controller.findByUsername);
router.get("/:username/games", controller.findUserGames);
router.get("/:id", controller.findById);
router.get("/:id/games", controller.findUserGames);

/* need to be authenticated + authenticated user needs to be admin for the below */

router.post("/create", /*[auth, isAdmin],*/ controller.create);
router.patch("/:id", /*[auth, isAdmin],*/ controller.update);
router.delete("/:id", /*[auth, isAdmin],*/ controller.delete);

module.exports = router;

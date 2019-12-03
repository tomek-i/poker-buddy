var router = require("express").Router();
var controller = require("../../controllers/gameController");
var auth = require("../../middlewares/auth");
var isAdmin = require("../../middlewares/isAdmin");

// url: api/game/*

router.get("/", auth, controller.index);
router.get("/:id", auth, controller.gameById);

//return the latest game played
router.get("/latest", auth, controller.current);
router.get("/recent", auth, controller.current);
router.get("/current", auth, controller.current);

/* need to be authenticated + authenticated user needs to be admin for the below */

router.post("/", /*[auth, isAdmin],*/ controller.create);
router.patch("/:id", /*[auth, isAdmin],*/ controller.update);
router.delete("/:id", /*[auth, isAdmin],*/ controller.delete);

module.exports = router;

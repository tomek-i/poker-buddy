var router = require("express").Router();
var controller = require("../../controllers/apiController");

// url: api/user/*

//router.get("/", controller.index);
router.get("/:id", controller.findUserById);
router.get("/:username", controller.findUserByUsername);
/*
router.get("/:username/games", controller.findUsersGamesByUsername);

router.get("/:id/games", controller.findUsersGamesById);
*/
/* need to be authenticated + authenticated user needs to be admin for the below */
/*
router.post("/create", controller.user_create);
router.patch("/:id",  controller.user_update);
router.delete("/:id", controller.user_delete);
*/
module.exports = router;

var router = require("express").Router();
var controller = require("../../controllers/apiController");

// url: api/game/*

//router.get("/", controller.index);
router.get("/:id", controller.findGameById);

/* need to be authenticated + authenticated user needs to be admin for the below */
/*
router.post("/",  controller.game_create);
router.patch("/:id",  controller.game_update);
router.delete("/:id",  controller.game_delete);
*/
module.exports = router;

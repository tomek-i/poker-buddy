var router = require("express").Router();
var admin_controller = require("../../controllers/adminController");
var game_controller = require("../../controllers/gameController");
var auth = require("../../middlewares/auth");
var isAdmin = require("../../middlewares/isAdmin");

// url: admin/*

router.get("/", [auth, isAdmin], admin_controller.index);

/*
router.post("/create/user", [auth, isAdmin], admin_controller.create_user);

router.post("/create/game",  [auth, isAdmin], admin_controller.create_game);
router.get("/game/:id", [auth, isAdmin], admin_controller.gameById);
router.get("/games",  [auth, isAdmin] , game_controller.index);
router.put("/game/:id", [auth, isAdmin], admin_controller.update_game);
*/
module.exports = router;

var router = require("express").Router();
var controller = require("../../controllers/gameController");
var auth = require("../../middlewares/auth");
var isAdmin = require("../../middlewares/isAdmin");

// url: api/game/*

//return all games
router.get("/", auth, controller.index);

//get specific game
router.get("/:id", auth, controller.gameById);

//return the latest game played
router.get("/latest", auth, controller.current);
router.get("/recent", auth, controller.current);
router.get("/current", auth, controller.current);

//create a new game
router.post("/", [auth, isAdmin], controller.create);
//update a game with specified id
router.put("/:id", [auth, isAdmin], controller.update);
//delete game with specified id
router.delete("/:id", [auth, isAdmin], controller.delete);

module.exports = router;

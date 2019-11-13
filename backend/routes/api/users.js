var mongoose = require("mongoose");
var router = require("express").Router();
var user_controller = require("../../controllers/userController");
//var passport = require('passport');
//var User = mongoose.model('User');

router.get("/user", user_controller.index);
router.post("/user", user_controller.create);
router.put("/user/:id", user_controller.update);
router.delete("/user/:id", user_controller.delete);
module.exports = router;

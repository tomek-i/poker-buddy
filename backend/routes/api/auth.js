var router = require("express").Router();
const controller = require("../../controllers/authController");
const userController = require("../../controllers/userController");

// url: /*

router.get("/register", controller.register);
router.post("/register", async (req, res, next) => {
  //TODO: can this be done? if all OK i want to redirect afterwards
  await userController.create(req, res, next);

  req.redirect("/");
});

router.get("/forgotpassword", async (req, res) => {
  res.send("RENDER FORGOT PASSWORD PAGE");
});

router.get("/login", controller.index);
router.post("/login", controller.authenticate);

router.post("/logout", controller.logout);

module.exports = router;

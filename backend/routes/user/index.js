var router = require("express").Router();

// url: user/*

router.get("/", async (req, res, next)=>{
    res.send("/")
});
router.get("/profile", async (req, res, next)=>{
    res.send("/profile")
});

module.exports = router;

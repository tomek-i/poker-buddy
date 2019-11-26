const debug = require("debug")("middleware:isAdmin");
const User = require("../models/user");

module.exports = function(req, res, next) {
  if (req.user_id) req.user = User.findById(req.user).select("-password");

  if (!req.user) {
    debug("No user in request found");
    res.status(400).send("You need to login to access this area.");
  } else if (req.user.isAdmin) {
    debug(`User '${req.user.username}' is logged in and is admin.`);
    next();
  } else {
    debug("User is not admin");
    res.status(400).send("Not admin.");
  }
};

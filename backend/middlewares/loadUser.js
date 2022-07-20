const debug = require("debug")("middleware:loadUser");
const User = require("../models/user");

module.exports = async function loadUser(req, res, next) {
  if (!req.user_id) {
    debug("No user id in request.");
    //TODO: probably better to redirect user to login page with error message.
    return next();
  }
  debug("Request user id found: ", req.user_id);
  const user = await User.findById(req.user_id).select("-password");

  if (!user) {
    debug("No user found with ID: ", req.user_id);
    return next(new Error("Invalid user id."));
  }
  debug("Current user: ", user);
  req.user = user;
  return next();
};

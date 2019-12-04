const debug = require("debug")("middleware:adminPermission");
const User = require("../models/user");

/**
 * Assumes previous middleware validated token and updated the user
 */
module.exports = function(req, res, next) {
  if (!req.user) {
    debug("No user in request. User need to authenticate again.");
    //TODO: probably better to redirect user to login page with error message.
    return next(new Error("You need to login."));
  }

  if (!user.isAdmin) {
    debug(`The user ${user.username} is not an admin.`);
    return next(new Error("Invalid permission."));
  }

  //valid user with admin permissions
  debug(`The user ${user.username} is an admin, continue with next().`);
  return next();
};

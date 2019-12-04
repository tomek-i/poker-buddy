const debug = require("debug")("middleware:checkUser");
const jwt = require("jsonwebtoken");
const config = require("config");
const { findToken, removeToken } = require("../util/util");

module.exports = function checkUser(req, res, next) {
  debug("Checking for cookie or header token");

  //check if we can find a token or cookie
  const token = findToken(req);

  if (token) {
    debug("a token was found, attempt to decode");
    //lets try to decode it
    try {
      const decoded = jwt.verify(token, config.get("secret"));
      //set the user_id - maybe we should load the user too?
      req.user_id = decoded._id;

      debug("token verified, user id: ", decoded._id);
    } catch (error) {
      removeToken(req, res);
      debug("token verification failed, ignoring and continue with next()");
    }
  } else {
    removeToken(req, res);
    debug("no token was found, continue with next()");
  }
  return next();
};

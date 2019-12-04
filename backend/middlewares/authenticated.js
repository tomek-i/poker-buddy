const debug = require("debug")("middleware:authenticated");
const jwt = require("jsonwebtoken");
const config = require("config");
const { findToken, removeToken } = require("../util/util");


module.exports = function(req, res, next) {
  //get the token from the header if present
  const token = findToken(req);
  //if no token found, return response (without going to the next middelware)
  if (!token) {
    //redirect to login page?
    debug("No token was found.");
    return next(new Error("Access denied. You need to login."));
  } else {
    //try to validate the token:

    try {
      //if can verify the token, set req.user and pass to next middleware
      const decoded = jwt.verify(token, config.get("secret"));
      req.user_id = decoded;
      debug("Token is valid and user id: ", decoded);
      next();
    } catch (error) {
      removeToken(req, res);
      if (error instanceof jwt.TokenExpiredError) {
        debug("The provided token has expired. ", error);
        //TODO: maybe instead redirect to login page?
        return next(error);
      } else if (error instanceof jwt.JsonWebTokenError) {
        debug("JWT is unauthorized: ", error);
        return next(error);
      }
      debug("Bad request: ", error);
      return next(error);
    }
  }
};

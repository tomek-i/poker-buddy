const debug = require("debug")("middleware:checkUser");
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function checkUser(req, res, next) {
  //if (req.path == "/") return next();

  //check if we can find a token or cookie
  const token =
    req.headers["x-access-token"] ||
    req.headers["authorization"] ||
    req.cookies.token;

  if (token) {
    debug("token found");
    //lets try to decode it
    try {
      const decoded_id = jwt.verify(token, config.get("secret"));
      //set the user_id - maybe we should load the user too?
      req.user_id = decoded_id;
    } catch (error) {
      debug("decoding token failed, ignoring");
    }
  }
  debug("passing through next");

  next();
};

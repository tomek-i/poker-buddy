const debug = require("debug")("middleware:auth");
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  //get the token from the header if present
  const token =
    req.headers["x-access-token"] ||
    req.headers["authorization"] ||
    req.cookies.token;
  //if no token found, return response (without going to the next middelware)
  if (!token) {
    //redirect to login page?
    debug("no token found, returnin 401");
    return res.status(401).send("Access denied. No token provided.");
  }

  try {
    //if can verify the token, set req.user and pass to next middleware
    const decoded = jwt.verify(token, config.get("secret"));
    req.user_id = decoded;
    debug("decoding token successfully: ", decoded);
    next();
  } catch (ex) {
    //if invalid token
    debug("decoding token failed with: ", ex);
    res.status(400).send("Invalid token.");
  }
};

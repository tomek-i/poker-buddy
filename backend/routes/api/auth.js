const debug = require("debug")("auth:user");
var router = require("express").Router();
const jwt = require("jsonwebtoken");
var User = require("../../models/user");
const config = require("config");
const util = require("../../util/util");
// url: /auth/*

//TODO: UTIL

router.post("/signup", (req, res, next) => {
  debug("SIGNUP CALLED");
  res.send("TODO: POST  signup");
});

router.post("/login", (req, res, next) => {
  debug("Posted login with: ", req.body);

  debug("Checking for cookies and token");
  const token = req.cookies.token;

  if (token) {
    //if a token is set
    debug("token found: ", token);
    let payload = null;
    try {
      debug("verifying payload");
      const decoded = jwt.decode(token);
      debug("iat: ", new Date(decoded.iat * 1000));
      debug("exp: ", new Date(decoded.exp * 1000));
      debug("dif: ", util.msToTime((decoded.exp - decoded.iat) * 1000));

      payload = jwt.verify(token, config.get("secret"));
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        debug("token expired ", error);
        req.cookies.token = null;
      } else if (error instanceof jwt.JsonWebTokenError) {
        debug("JWT is unauthorized: ", error);
        // if the error thrown is because the JWT is unauthorized, return a 401 error
        return res.status(401).end();
      } else {
        debug("bad request", error);
        // otherwise, return a bad request error
        return res.status(400).end();
      }
    }

    if (payload) {
      debug("payload OK");
      return res.send(`Welcome back ${payload.username}!`);
    }
  }

  // Get credentials from JSON body
  const { username, password } = req.body;

  // return 401 error is username or password doesn't exist
  if (!username || !password) {
    debug("username or password invalid, returning 401");
    return res.status(401).end();
  }
  debug("find user with username: ", username);
  const result = User.findOne(
    {
      username: username
      /*,
      password: password
      */
    },
    (err1, result) => {
      if (err1) {
        debug("Error occurred: ", err);
        throw err1;
      }

      debug("Compare passwords: ", password);
      result.comparePassword(password, (err, isMatch) => {
        if (err) {
          debug("Error occurred: ", err);
          throw err;
        }

        debug("passwords matched?: ", isMatch);
        if (isMatch) {
          debug("creating token");
          const token = result.generateAuthToken();
          debug("token: ", token);

          debug("Setting cookie");
          // set the cookie as the token string, with a similar max age as the token
          // here, the max age is in milliseconds, so we multiply by 1000
          res.cookie("token", token, {
            maxAge: config.get("jwt.expiry") * 1000
          });
          debug("Sending OK response");

          return res.redirect("/");
          return res.send("TODO: POST  login");
        } else {
          debug("Sending 401 response");
          return res.status(401).end();
        }
      });
    }
  );
});

router.post("/logout", (req, res, next) => {
  res.send("TODO: POST  logout");
});

module.exports = router;

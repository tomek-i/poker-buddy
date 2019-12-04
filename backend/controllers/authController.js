const debug = require("debug")("controller:auth");
const User = require("../models/user");

const util = require("../util/util");

exports.index = async (req, res, next) => {
  debug("index called.")
  if(req.user) return res.redirect("/user/profile")

  return res.render("login");
};

exports.authenticate = async (req, res, next) => {
  debug("authenticate called.")

  debug("Removing exiting authentication token.");
  util.removeToken(req, res);

  debug("Posted login with: ", req.body);
  const { username, password } = req.body;

  // return 401 error is username or password doesn't exist
  if (!username || !password) {
    debug("username or password invalid not specified or invalid");
    return next(new TypeError("Username or Password invalid."));
  }
  debug("Checking database if username exists: ", username);
  //TODO: maybe it would be good, to load the user by username without the password, then call compare password function which sends a DB query by just comparing the passwords on the DB side and returns true/false
  try {
    const currentUser = await User.findOne({ username: username });
    debug("Comparing passwords");
    currentUser.comparePassword(password, (err, isMatch) => {
      if (err) {
        debug("Error occurred comparing passwords: ", err);
        return next(err);
      }

      if (isMatch) {
        debug("Passwords matched, creating authorization token.");
        const token = currentUser.generateAuthToken();
        debug("Generated Token: ", token);

        debug("Setting headers and cookie");
        res.cookie("token", token);
        res.header("token", token);
        debug("Redirect user to profile page");
        return res.redirect("/user/profile");
      } else {
        debug("Passwords did not match.");

        return next(new Error("Authentication failed."));
      }
    });
  } catch (error) {
    debug("An error occurred: ", error);
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  debug("Logout called")
  debug("remove tokens")
  util.removeToken(req,res)

  return res.redirect("/")
};
exports.register = async (req, res, next) => {
  res.render("register", {
    user: req.user
  });
};

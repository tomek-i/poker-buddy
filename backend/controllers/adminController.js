const debug = require("debug")("controller:admin");
const User = require("../models/user");

exports.index = async (req, res, next) => {
  const user = req.user
    ? req.user
    : req.user_id
    ? User.findById(req.user_id).select("-password")
    : null;
  if (!user) {
    debug("No user found.");
    return next(ReferenceError("No user found."));
  }

  res.render("backend/index", {
    user: user
  });
};

//TODO: there is some logic in API for creating users through the controller.. need to be re-used
//user_controller.create

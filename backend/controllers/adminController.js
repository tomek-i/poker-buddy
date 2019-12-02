const debug = require("debug")("controller:admin");

exports.index = async (req, res, next) => {
  res.send("ADMIN INDEX");
};

//TODO: there is some logic in API for creating users through the controller.. need to be re-used
//user_controller.create

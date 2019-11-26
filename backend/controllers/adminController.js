const debug = require("debug")("controller:admin");

exports.index = async (req, res, next) => {
  res.send("ADMIN INDEX");
};

const debug = require("debug")("controller:user");

exports.create = (req, res) => {
  res.send("user create");
};

exports.index = (req, res) => {
  res.send("user read");
};
exports.update = (req, res) => {
  res.send("user update");
};
exports.delete = (req, res) => {
  res.send("user delete");
};

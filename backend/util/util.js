const debugRemoveToken = require("debug")("util:removeToken");

exports.msToTime = function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
};
exports.removeToken = (request, response) => {
  try {
    delete request.headers["x-access-token"];
    delete request.headers["authorization"];
    delete request.headers["token"];
    response.cookie("token", { expires: Date.now() });
    delete request.cookies.token;
  } catch (error) {
    debugRemoveToken(error);
  }
};
exports.findToken = request => {
  return (
    request.headers["x-access-token"] ||
    request.headers["authorization"] ||
    request.headers["token"] ||
    request.cookies.token
  );
};

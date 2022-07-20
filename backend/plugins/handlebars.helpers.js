const debug = require("debug")("controller:game");

var dateFormat = require("dateformat");

var register = function(Handlebars) {
  var helpers = {
    formatDate: function(datetime, format) {
      try {
        debug(`Reformatting date of '${datetime}' with format '${format} `);
        const formated = dateFormat(datetime, format);
        debug("New date format: ", formated);
        return formated;
      } catch (error) {
        debug("Formatting failed with error: ", error);
        return datetime;
      }
    }
  };

  if (Handlebars && typeof Handlebars.registerHelper === "function") {
    for (var prop in helpers) {
      Handlebars.registerHelper(prop, helpers[prop]);
    }
  } else {
    return helpers;
  }
};

module.exports.register = register;
module.exports.helpers = register(null);

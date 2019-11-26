// app.js

/**
 * Required External Modules
 */
require("dotenv").config();
const config = require("config");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const debug = require("debug")("app:init");
const path = require("path");
const cookieParser = require("cookie-parser");
var hbs = require("express-handlebars");
//const bodyParser = require("body-parser");

//use config module to get the secret, if no private key set, end the application
if (!config.get("secret")) {
  console.error("FATAL ERROR: secret is not defined.");
  process.exit(1);
}

/**
 * App Variables
 */
const app = express();
const port = config.get("port") || 3000;
const APP_MODE = config.get("mode");
const DEBUG =
  config.get("mode") === "DEBUG" || app.get("env") === "development";
const APP_NAME = config.get("app_name");
const debugCors = debug.extend("cors");

/**
 *  App Configuration
 */
debug(`application '${APP_NAME}' booting ...`);
debug("running in mode:", APP_MODE);

let whitelist = [];
if (DEBUG !== true) {
  whitelist.concat(["example.com"]);
}
debugCors("cors whitelist", whitelist);
const corsOptions = {
  origin: function(origin, callback) {
    debugCors("cors Origin", origin);
    const isWhitelisted = whitelist.indexOf(origin) !== -1;
    debugCors("origin whitelisted?", isWhitelisted);
    if (isWhitelisted || DEBUG) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs({
    extname: "hbs"
    // defaultView: "default",
    // layoutsDir: __dirname + "/views/pages/",
    // partialsDir: __dirname + "/views/partials/"
  })
);

if (DEBUG) {
  debug("morgan HTTP logging middleware enabled");
  app.use(morgan("dev"));
}

/**
 * Database Activation
 */
const db = require("./database");
db().catch(err => {
  debug("Unable to connect to database.", err);
  process.exit(1);
});

/**
 * Routes Definitions
 */
app.use(require("./routes"));

/**
 * ROUTE ERROR HANDLERS
 */

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("404 Page Not Found");
  err.status = 404;
  err.url = req.originalUrl;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (DEBUG) {
  app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err
      }
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {}
    }
  });
});

/**
 * Server Activation
 */

app.listen(port, () => {
  debug("listening on port", port);
  debug(`${APP_NAME} ready! visit: http://localhost:${port}`);
});

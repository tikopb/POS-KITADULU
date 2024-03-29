const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const flash = require("express-flash");
const passport = require("./lib/passport");
const cors = require("cors");

// charis added
const credentials = require("./routes/middlewares/credentials");
const corsOptions = require("./lib/corsOptions");
// end of charis

const PORT = process.PORT || 4000;

var app = express();
// set alternative *port*
app.listen(PORT, () => console.log(" server listening on port:" + PORT));
// set alternative *port*

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// charis added
app.use(credentials);
//app.use(cors());
app.use(cors(corsOptions));
// end of charis

// pos-kita router *start*
app.use(
  session({
    secret: "posKita",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(flash());

//passport identivide (start)
app.use(passport.initialize());
app.use(passport.session());
//passport identivide (end)*

const router = require("./routes");
app.use(router);
// pos-kita router *start*

//swagger-uidocumentation api *start*
const swaggerJSON = require("./swagger.json");
const swaggerUI = require("swagger-ui-express");

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));
//swagger-uidocumentation api *END*

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

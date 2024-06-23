var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var dotenv = require("dotenv");

var authRouter = require("./routes/auth");
var carRouter = require("./routes/cars");
var dealershipRouter = require("./routes/dealerships");
var errorHandler = require("./middleware/errorHandler");

dotenv.config();

var app = express();

// MongoDB connection
var connectDB = require("./config/db");
connectDB()
  .then((db) => {
    app.locals.db = db;

    // Middleware
    app.use(logger("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, "public")));

    // Routes
    app.use("/api/auth", authRouter);
    app.use("/api/cars", carRouter);
    app.use("/api/dealerships", dealershipRouter);

    // Catch 404 and forward to error handler
    app.use(function (req, res, next) {
      next(createError(404));
    });

    // Error handler
    app.use(errorHandler);

    // Start the server
    var PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });

// Export the app for testing
module.exports = app;

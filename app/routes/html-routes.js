// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/splash.html"));
      });

    app.get("/create", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/create.html"));
      });

    app.get("/search", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/search.html"));
      });

    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
      });

    app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
      });

    
}
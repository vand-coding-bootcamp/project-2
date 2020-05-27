var db = require("../models");

module.exports = function(app) {
  // Load Landing page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dATA) {
      res.render("index", {
        msg: "Let's get Sweati."
      });
    });
  });

  app.get("/dashboard/:id", function(req, res) {
    res.render("dash", {
      msg: "Let's get Sweati."
    });
  });

  // Load Login page
  app.get("/login", function(req, res) {
    db.User.findAll({}).then(function() {
      res.render("login");
    });
  });

  // Load Register page
  app.get("/register", function(req, res) {
    db.User.findAll({}).then(function() {
      res.render("register");
    });
  });

  // // Load the login page
  // app.get("/login", function(req, res) {
  //   db.User.findOne({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.render("login", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

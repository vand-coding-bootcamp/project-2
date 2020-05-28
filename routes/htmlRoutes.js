var db = require("../models");

module.exports = function(app) {
  // Load Landing page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dATA) {
      res.render("index", {
        msg: "Let's get",
      });
    });
  });

  // Load Dashboard page
  app.get("/dashboard/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: db.Cardio,
        },
        {
          model: db.Mind,
        },
        {
          model: db.Friends,
        },
        {
          model: db.Strength,
        },
      ],
    }).then(function(data) {
      console.log(data.dataValues.Cardios[0].dataValues)
      res.render("dash", {
        data: data.dataValues
      });
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

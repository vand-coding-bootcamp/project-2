var db = require("../models");

module.exports = function(app) {
  // =========================================================================================
  // --------------------------------LANDING PAGE---------------------------------------------
  // =========================================================================================
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dATA) {
      res.render("index", {
        msg: "Let's get"
      });
    });
  });

  // =========================================================================================
  // --------------------------------DASHBOARD PAGE---------------------------------------------
  // =========================================================================================
  app.get("/dashboard/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: db.Cardio
        },
        {
          model: db.Mind
        },
        {
          model: db.Strength
        }
      ]
    }).then(function(data) {
      res.render("dash", {
        data: data.dataValues
      });
    });
  });

  // =========================================================================================
  // --------------------------------LOGIN PAGE---------------------------------------------
  // =========================================================================================
  app.get("/login", function(req, res) {
    db.User.findAll({}).then(function() {
      res.render("login");
    });
  });

  // =========================================================================================
  // --------------------------------REGISTER PAGE---------------------------------------------
  // =========================================================================================
  app.get("/register", function(req, res) {
    db.User.findAll({}).then(function() {
      res.render("register");
    });
  });

  // =========================================================================================
  // --------------------------------WORKOUT PAGE---------------------------------------------
  // =========================================================================================
  app.get("/workout/:id", function(req, res) {
    db.User.findOne({
      where: { id: req.params.id }
    }).then(function(data) {
      res.render("workout", {
        data: data.dataValues
      }); //When we switch over to handlebars, we need to change this line to res.render("dash", {dbUser:dbUser})
    });
    //  db.User.findAll({}).then(function() {
    //    res.render("workout");
    //  });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

var db = require("../models");

module.exports = function(app) {
  // Get all users of app (working)
  app.get("/api/examples", function(req, res) {
    db.User.findAll({
      include: [
        {
          model: db.Cardio
        },
        {
          model: db.Mind
        },
        {
          model: db.Friends
        },
        {
          model: db.Strength
        }
      ]
    }).then(function(data) {
      res.json(data);
    });
  });

  // Show user data in dashboard
  app.get("/api/dashboard/:id", function(req, res) {
    db.User.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: db.Cardio
        },
        {
          model: db.Mind
        },
        {
          model: db.Friends
        },
        {
          model: db.Strength
        }
      ]
    }).then(function(dbUser) {
      res.json(dbUser); //When we switch over to handlebars, we need to change this line to res.render("dash", {dbUser:dbUser})
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};

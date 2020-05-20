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

  // Create a new example
  app.get("/api/dashboard/:id", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
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

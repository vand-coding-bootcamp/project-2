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

  app.get("/api/connect", function(req, res) {
    db.User.findAll({}).then(function(data) {
      // for (var i = 0; i < db.User.length; i++) {
      res.json(data);
    });
  });

  app.post("/api/friends", function(req, res) {
    db.Friends.create({
      // friend is pulling from front end - be sure to add "friend" as the variable
      friends: req.body.friend,
      image: req.body.image,
      // change from body to user - body is just for testing purposes in postman until front end is ready
      UserId: req.user.userId
    }).then(function(newFriend) {
      res.json(newFriend);
    });
  });

  app.post("/api/friends/:id", function(req, res) {
    db.Friends.findOne({
      where: { id: req.body.id }
    }).then(function(friend) {
      res.json(friend);
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

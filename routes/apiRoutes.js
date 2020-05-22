var db = require("../models");

module.exports = function(app) {
  // Get all users of app (working)
  app.get("/api/examples", function(req, res) {
    db.User.findAll({
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
      res.json(data);
    });
  });

  // Show user data in dashboard
  app.get("/api/dashboard/:id", function(req, res) {
    db.User.findOne({
      where: { id: req.params.id },
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
    }).then(function(dbUser) {
      res.json(dbUser); //When we switch over to handlebars, we need to change this line to res.render("dash", {dbUser:dbUser})
    });
  });

  app.post("/api/friends", function(req, res) {
    db.Friends.create({
      // friend is pulling from front end - be sure to add "friend" as the variable
      friends: req.body.friend,
      image: req.body.image,
      // change from body to user - body is just for testing purposes in postman until front end is ready
      UserId: req.body.userId,
    }).then(function(newFriend) {
      res.json(newFriend);
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

  app.post("/api/workout", function(req, res) {
    console.log("we shoudls ave the body to the database", req.body);

    if (req.body.workout_type === "cardio") {
      db.Cardio.create({
        // friend is pulling from front end - be sure to add "friend" as the variable
        cardio_act: req.body.cardio_act,
        start: req.body.start,
        end: req.body.start.end,
        // change from body to user - body is just for testing purposes in postman until front end is ready
        UserId: req.body.userId
      }).then(function(newWorkout) {
        res.json(newWorkout);
      });
    } else if (req.body.workout_type === "mind") {
      db.Mind.create({
        // friend is pulling from front end - be sure to add "friend" as the variable
        mind_act: req.body.mind_act,
        start: req.body.start,
        end: req.body.start.end,
        // change from body to user - body is just for testing purposes in postman until front end is ready
        UserId: req.body.userId
      }).then(function(newWorkout) {
        res.json(newWorkout);
      });
    } else if (req.body.workout_type === "strength") {
      db.Strength.create({
        // friend is pulling from front end - be sure to add "friend" as the variable
        strength_act: req.body.strength_act,
        start: req.body.start,
        end: req.body.start.end,
        // change from body to user - body is just for testing purposes in postman until front end is ready
        UserId: req.body.userId,
      }).then(function(newWorkout) {
        res.json(newWorkout);
      });
    }
  });

  // Delete an workout by id
  app.delete("/api/workout/:id", function(req, res) {
    if (req.body.workout_type === "cardio") {
      db.Cardio.destroy({ where: { id: req.params.id } }).then(function(data) {
        res.json(data);
      });
    } else if (req.body.workout_type === "mind") {
      db.Mind.destroy({ where: { id: req.params.id } }).then(function(
        dbExample
      ) {
        res.json(dbExample);
      });
    } else if (req.body.workout_type === "strength") {
      db.Strength.destroy({ where: { id: req.params.id } }).then(function(
        dbExample
      ) {
        res.json(dbExample);
      });
    }
  });
};

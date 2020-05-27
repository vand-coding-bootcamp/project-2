var db = require("../models");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var keys = require("../config/keys");

// Get all users of app (working)
module.exports = function(app) {
  app.post("/api/register", function(req, res) {
    console.log("this route is working");

    db.User.findOne({
      where: {
        username: req.body.username
      }
    }).then(function(user) {
      if (user) {
        return res.status(400).json("user already exists");
      } else {
        var newUser = {
          username: req.body.username,
          password: req.body.password,
          height_ft: parseInt(req.body.height_ft),
          height_in: parseInt(req.body.height_in),
          weight: parseInt(req.body.weight),
          age: parseInt(req.body.age),
          image: req.body.image,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip
        };
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(newUser.password, salt, function(err, hash) {
            if (err) {
              throw err;
            }
            newUser.password = hash;
            db.User.create(newUser)
              .then(function() {
                return res.json(newUser);
              })
              .catch(function(err) {
                console.log(err);
              });
          });
        });
      }
    });
  });

  app.post("/api/login", function(req, res) {
    db.User.findOne({
      where: {
        username: req.body.username
      }
    }).then(function(user) {
      if (!user) {
        return res.status(404).json("User not found");
      }
      var password = req.body.password;
      bcrypt.compare(password, user.password).then(function(isMatch) {
        if (isMatch) {
          var payload = {
            id: user.id
          };
          jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, function(
            err,
            token
          ) {
            res.json({ success: true, token: "Bearer " + token });
          });
        } else {
          return res.status(400).json("Invalid Password");
        }
      });
    });
  });

  app.post("/api/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
};

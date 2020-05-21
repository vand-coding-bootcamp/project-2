var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
var User = require("../models").User;
var keys = require("../config/keys");

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports = function(passport) {
  passport.use(
    new JwtStrategy(opts, function(jwt_payload, done) {
      User.findOne({ where: { id: jwt_payload.id } })
        .then(function(user) {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(function(err) {
          return console.log(err);
        });
    })
  );
};

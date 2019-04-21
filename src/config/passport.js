const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Student = mongoose.model("students");
const Admin = mongoose.model("admins");
const keys = require("../config/keys");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Admin.findById(jwt_payload.id)
        .then(admin => {
          if (admin) {
            return done(null, admin);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );

  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Student.findById(jwt_payload.id)
        .then(student => {
          if (student) {
            return done(null, student);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};

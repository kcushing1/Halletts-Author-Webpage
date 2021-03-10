const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(
  new LocalStrategy((username, password, done) => {
    db.User.findOne({
      where: {
        username: username,
      },
    }).then((isUser) => {
      //if username does not exist
      if (!isUser) {
        return done(null, false, { message: "Incorrect username or password" });
      }
      //if password does not match
      else if (!isUser.validPassword(password)) {
        return done(null, false, { message: "Incorrect username or password" });
      }

      //if passes, return user
      return done(null, isUser);
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;

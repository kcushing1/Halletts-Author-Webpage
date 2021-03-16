const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(
  new LocalStrategy((username, password, done) => {
    db.User.findOne({
      where: {
        username: username,
      },
    })
      .then((user) => {
        if (!user) {
          return done(null, false);
        }
        bcrypt.compare(password, user.password, (err, result) => {
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      })
      .catch((err) => done(err));
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});
passport.deserializeUser((id, cb) => {
  db.User.findOne({ where: { id: id } }, (err, user) => {
    const userInfo = {
      username: user.username,
    };
    cb(err, userInfo);
  });
});

module.exports = passport;

//credit to: Nathaniel Woodbury
//youtube: https://www.youtube.com/watch?v=IUw_TgRhTBE
//https://github.com/woodburydev/passport-local-video/blob/master/backend/passportConfig.js

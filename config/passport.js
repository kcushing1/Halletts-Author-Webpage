const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(
  new LocalStrategy((username, password, done) => {
    console.log("in local strategy");
    db.User.findOne({
      where: {
        username: username,
      },
    })
      .then((user) => {
        // })
        //console.log(user);
        // (err, user) => {
        //if (err) throw err;
        if (!user) {
          console.log("no user, in passport.js");
          return done(null, false);
        }
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            console.log("matched, in passport.js");
            return done(null, user);
          } else {
            console.log("pw not matched, in passport.js");
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
  db.User.findOne({ id: id }, (err, user) => {
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

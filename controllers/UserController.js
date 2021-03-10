const passport = require("../config/passport");
const db = require("../models");
const bcrypt = require("bcryptjs");

const User = db.users;

module.exports = {
  //create login credentials
  signup: (req, res) => {
    async function makePw() {
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      db.User.create({
        username: req.body.username,
        password: hashPassword,
      });
      res.send("user created");
    }
    makePw();
  },
  // const hashPassword = bcrypt.hash(req.body.password, 10);
  //db.User.create({
  // db.User.findAll(
  //   { where: { username: req.body.username } },
  //   async (err, doc) => {
  //     if (err) throw err;
  //     if (doc) res.send("User already exists");
  //     if (!doc) {
  //       const hashPassword = await bcrypt.hash(req.body.password, 10);

  //       db.User.create({

  // res.redirect("/admin");
  // },
  //     }
  //   );
  // },
  // );
  // db.User.create({
  //   username: req.body.username,
  //   password: req.body.password,
  // })
  //   .then(() => {
  //     res.redirect("/admin");
  //   })
  //   .catch((err) => console.log("err is: ", err));
  //},

  //log in
  login: (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No user exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
    //res.redirect("/admin");
    //passport.authenticate("local", (req, res) => {
    //res.json(req.user);
    // {
    //   successRedirect: "/admin";
    // }
    // });
  },

  //log out
  logout: (req, res) => {
    // req.session.destroy((err) => {
    //   res.redirect("/");
    // });
    req.logout();
    res.redirect("/home");
  },

  // //go to home page
  // toHome: (req, res) => {
  //   res.redirect("/admin");
  // },

  // //redirect if not logged in
  // isLoggedIn: (req, res, next) => {
  //   if (req.isAuthenticated()) return next();
  //   res.redirect("/login");
  // },
};

//with help from: Nathaniel Woodbury
//youtube: https://www.youtube.com/watch?v=IUw_TgRhTBE
//https://github.com/woodburydev/passport-local-video/blob/master/backend/passportConfig.js

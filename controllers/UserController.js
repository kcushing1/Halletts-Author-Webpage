const passport = require("../config/passport");
const db = require("../models");

const User = db.users;

module.exports = {
  //create login credentials
  signup: (req, res) => {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
    })
      .then(() => {
        res.redirect("/admin");
      })
      .catch((err) => console.log("err is: ", err));
  },

  //log in
  login: () => {
    //res.redirect("/admin");
    passport.authenticate("local", (req, res) => {
      res.json(req.user);
      // {
      //   successRedirect: "/admin";
      // }
    });
  },

  //log out
  logout: (req, res) => {
    req.session.destroy((err) => {
      res.redirect("/");
    });
  },

  //go to home page
  toHome: (req, res) => {
    res.redirect("/admin");
  },

  //redirect if not logged in
  isLoggedIn: (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
  },
};

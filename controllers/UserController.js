const passport = require("../config/passport");
const db = require("../models");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

//from auth0 documention
const util = require("util");
const url = require("url");
const querystring = require("querystring");

const User = db.users;

module.exports = {
  //create login credentials
  signup: (req, res) => {
    async function makePw() {
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      db.User.create({
        username: req.body.username,
        password: hashPassword,
      }).then((userInfo) => {
        res.send({ user: userInfo.id });
      });
    }
    makePw();
  },

  triallog: (req, res) => {
    res.json(req.user);
  },
  connect: (req, res) => {
    console.log("connect");
    db.User.findOne({
      where: {
        username: req.body.username,
      },
    }).then((userData) => {
      if (!userData) {
        res.send({
          user: false,
          message: "user not found",
        });
        return;
      } else console.log(userData);
    });
  },

  //log in
  login: (req, res) => {
    //res.redirect("/");
    //res.json(req.user);
    //console.log("inside login controller");
    db.User.findOne({
      where: {
        username: req.body.username,
      },
    })
      .then(async function (userData) {
        if (!userData) {
          res.send({
            user: false, //, message: "user not found"
          });
          return;
        }
        if (await bcrypt.compare(req.body.password, userData.password)) {
          //let cookievalue = await bcrypt.hash("")
          res.cookie("cookie-monster").send({
            user: userData, //, message: "welcome back"
          });
        } else {
          res.send({
            user: false, //, message: "login failed, please try again"
          });
        }
      })
      .catch((err) => {
        res.send(err);
        console.log(err);
      });
    // passport.authenticate("local", (err, user, info) => {
    //   if (err) throw err;
    //   if (!user) res.send("No user exists");
    //   else {
    //     req.logIn(user, (err) => {
    //       console.log("wheredoesthislog");
    //       if (err) throw err;
    //       res.send("Successfully Authenticated");
    //       console.log(req.user);
    //     });
    //   }
    // })(req, res, next);
    //res.redirect("/admin");
    //passport.authenticate("local", (req, res) => {
    //res.json(req.user);
    // {
    //   successRedirect: "/admin";
    // }
    // });
  },
  callback: (req, res, next) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/home");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      const returnTo = req.session.returnTo;
      delete req.session.returnTo;
      res.redirect(returnTo || "/user");
    })(req, res, next);
  },

  //log out
  authlogout: (req, res) => {
    req.logout();
    const returnTo = req.protocol + "://" + req.hostname;
    const port = req.connection.localPort;
    if (port !== undefined && (port !== 80) & (port !== 443)) {
      returnTo += ":" + port;
    }
    const logoutURL = new url.URL(
      util.format("https://%s/v2/logout", process.env.AUTH0_DOMAIN)
    );
    const searchString = querystring.stringify({
      client_id: process.env.AUTH0_CLIENT_ID,
      returnTo: returnTo,
    });
    logoutURL.search = searchString;
    res.redirect(logoutURL);
    // )
    // req.session.destroy((err) => {
    //   res.redirect("/");
    // });
    //req.logout();
    //res.redirect("/home");
  },
  user: (req, res, next) => {
    const { _raw, _json, ...userProfile } = req.user;
    res.render("user", {
      userProfile: JSON.stringify(userProfile, null, 2),
      title: "Profile page",
    });
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
  logout: (req, res) => {
    req.logout();
    res.clearCookie("connect.sid").send(200);
    req.session.destroy();
    res.redirect("/home");
  },
};

//with help from: Nathaniel Woodbury
//youtube: https://www.youtube.com/watch?v=IUw_TgRhTBE
//https://github.com/woodburydev/passport-local-video/blob/master/backend/passportConfig.js

const express = require("express");
const secured = require("../../config/middleware/secured");
const passport = require("../../config/passport");
const UserController = require("../../controllers/UserController");
const router = express.Router();
//from auth0 documentation
// const util = require("util");
// const url = require("url");
// const querystring = require("querystring");

router.get("/signup", UserController.signup);
router.post("/login", UserController.login);
//router.get("/login", passport.authenticate("auth0"), UserController.login);
//router.get("/callback", UserController.callback);
router.post(
  "/authcook",
  passport.authenticate(
    "local"
    // , {
    //   successRedirect: "/admin",
    //   failureRedirect: "/",
    // }
  ),
  (req, res) => {
    console.log("inside /authcook req-res");
    console.log(req.user);
    res.json(req.user.dataValues);
  }
);
router.post("/connect", UserController.connect);
router.post(
  "/trial",
  passport.authenticate("local", {
    failureRedirect: "/home",
    successRedirect: "/admin",
  }),
  UserController.triallog
);
router.get("/logout", UserController.authlogout);
//router.get("/user", secured(), UserController.user);

router.post(
  "/signup",
  UserController.signup
  // passport.authenticate("local-signup", {
  //   successRedirect: "/admin",
  //   failureRedirect: "/login",
  // })
);

router.get("/logout", UserController.logout);

module.exports = router;

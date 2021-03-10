const express = require("express");
const passport = require("../../config/passport");
const UserController = require("../../controllers/UserController");
const router = express.Router();

router.get("/signup", UserController.signup);
router.post(
  "/login",
  UserController.login
  // passport.authenticate("local", {
  //   successRedirect: "/admin",
  //   failureRedirect: "/home",
  // })
);

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

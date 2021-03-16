const express = require("express");
const passport = require("../../config/passport");
const UserController = require("../../controllers/UserController");
const router = express.Router();

router.post("/signup", UserController.signup);
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user.dataValues);
});

module.exports = router;

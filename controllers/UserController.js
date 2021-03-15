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
};

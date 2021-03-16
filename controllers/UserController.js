const passport = require("../config/passport");
const db = require("../models");
const bcrypt = require("bcryptjs");
const User = db.users;

module.exports = {
  //create login credentials
  signup: (req, res) => {
    async function makePw() {
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      console.log("creating user, user controller");
      db.User.create({
        username: req.body.username,
        password: hashPassword,
      })
        .then((userInfo) => {
          res.send({ user: userInfo.id });
        })
        .catch((err) => console.log("err is: ", err));
    }
    makePw();
    console.log("made new user & pw");
  },
};

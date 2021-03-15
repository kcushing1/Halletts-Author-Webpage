const express = require("express");
const app = express();
const passport = require("passport");
const Sequelize = require("sequelize");
const session = require("express-session");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
require("dotenv").config();

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SECRET || "FreeGree",
    store: new SequelizeStore({
      db: db.sequelize,
    }),
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Start the API server
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

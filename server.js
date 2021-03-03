const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
//const sequelize = require("sequelize");
const routes = require("./routes");
require("dotenv").config();

const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
//if (process.env.NODE_ENV === "production") {
//app.use(express.static("client/build"));
//}

app.use(routes);

// Start the API server
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

const express = require("express");
const app = express();
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
require("dotenv").config();

const db = require("./models");
const userInViews = require("./config/middleware/userInViews");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//for passport with auth0
// const sess = {
//   secret: process.env.SECRET || "FreeGree",
//   cookie: {},
//   resave: true,
//   saveUninitialized: true,
// };

// const strategy = new Auth0Strategy(
//   {
//     domain: process.env.AUTH0_DOMAIN,
//     clientID: process.env.AUTH0_CLIENT_ID,
//     clientSecret: process.env.AUTH0_CLIENT_SECRET,
//     callbackURL:
//       process.env.AUTH0_CALLBACK_URL || "http://localhost:3001/callback",
//   },

//   function (accessToken, refreshToken, extraParams, profile, done) {
//     return done(null, profile);
//   }
// );
// passport.use(strategy);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//auth0
// if (process.env.NODE_ENV === "production") {
//   session.cookie.secure = true;
//   app.set("trust proxy", 1);
// }
//app.set("trust proxy", 1);
app.use(
  session({
    secret: process.env.SECRET || "FreeGree",
    //cookie: { secure: true },
    resave: true,
    saveUninitialized: true,
  })
);
//app.use(userInViews());

//app.use(cookieParser(process.env.COOKIE || "FlowerpotCrash"));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

// Start the API server
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

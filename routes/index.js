const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

// if (process.env.NODE_ENV === "production") {
//   // Handle React routing, return all requests to React app
//   app.use("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "client/build", "index.html"));
//   });
// }

module.exports = router;

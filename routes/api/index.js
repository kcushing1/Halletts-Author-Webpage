const router = require("express").Router();
const flashFictionRoutes = require("./flashFiction");

router.use("/flashfiction", flashFictionRoutes);

module.exports = router;

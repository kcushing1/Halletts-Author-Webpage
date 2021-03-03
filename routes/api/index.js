const router = require("express").Router();
const flashFictionRoutes = require("./flashFiction");
const messageRoutes = require("./message");

router.use("/flashfiction", flashFictionRoutes);
router.use("/message", messageRoutes);

module.exports = router;

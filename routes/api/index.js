const router = require("express").Router();
const flashFictionRoutes = require("./flashFiction");
const messageRoutes = require("./message");
const userRoutes = require("./auth");

router.use("/flashfiction", flashFictionRoutes);
router.use("/message", messageRoutes);
router.use("/auth", userRoutes);

module.exports = router;

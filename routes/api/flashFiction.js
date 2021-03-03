//POST from admin
//GET to public
const express = require("express");
const FlashFictionController = require("../../controllers/FlashFictionController");
const router = express.Router();

router.get("/", FlashFictionController.test);

module.exports = router;

//POST from admin
//GET to public
const express = require("express");
const FlashFictionController = require("../../controllers/FlashFictionController");
const router = express.Router();

router.get("/", FlashFictionController.findAll);
router.get("/:id", FlashFictionController.findOne);
router.post("/create", FlashFictionController.create);
router.delete("/delete/:id", FlashFictionController.delete);

module.exports = router;

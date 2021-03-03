//POST from public
//GET to admin
const express = require("express");
const MessageController = require("../../controllers/MessageController");
const router = express.Router();

router.get("/findAll", MessageController.findAll);
router.get("/:id", MessageController.findOne);
router.post("/create", MessageController.create);
router.delete("/:id", MessageController.delete);

module.exports = router;

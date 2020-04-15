const express = require("express");
const router = express.Router();
const chatsController = require('../../../controllers/api/v1/chats');

/* api/v1/chats */

router.get("/", chatsController.getAll);
router.post("/", chatsController.create);
router.put("/:id", chatsController.update);

module.exports = router; 
const express = require("express");
const router = express.Router();
const { chatbotQuery } = require("../controllers/chatbotController");

router.post("/query", chatbotQuery);

module.exports = router;
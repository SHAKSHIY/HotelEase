const express = require("express");
const router = express.Router();
const { searchHotels } = require("../controllers/hotelController");

router.post("/search", searchHotels);

module.exports = router;
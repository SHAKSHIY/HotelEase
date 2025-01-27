const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const hotelRoutes = require("./routes/hotelRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/hotels", hotelRoutes);
app.use("/api/chatbot", chatbotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
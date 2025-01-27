const axios = require("axios");
require("dotenv").config();

const apiClient = axios.create({
  baseURL: process.env.TBO_API_URL,
  auth: {
    username: process.env.TBO_API_USERNAME,
    password: process.env.TBO_API_PASSWORD,
  },
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = apiClient;
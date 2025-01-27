const axios = require("axios");

exports.searchHotels = async (req, res) => {
  const { location, checkin, checkout } = req.body;

  const requestData = {
    username: process.env.TBO_API_USERNAME,
    password: process.env.TBO_API_PASSWORD,
    clientid: process.env.TBO_API_CLIENTID,
    location: location,
    checkin: checkin,
    checkout: checkout,
  };

  try {
    const response = await axios.post(process.env.TBO_API_URL, requestData);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching hotel data" });
  }
};
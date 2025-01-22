import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

const TBO_API_URL = process.env.TBO_API_URL;
const TBO_API_USERNAME = process.env.TBO_API_USERNAME;
const TBO_API_PASSWORD = process.env.TBO_API_PASSWORD;
const TBO_API_CLIENTID = process.env.TBO_API_CLIENTID;

export const searchHotels = async (query) => {
  try {
    const response = await axios.post(
      `${TBO_API_URL}/searchHotels`, // Replace with actual endpoint
      {
        query,
        ClientId: TBO_API_CLIENTID, // Include ClientId if required
        Username: TBO_API_USERNAME,
        Password: TBO_API_PASSWORD,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data; // Adjust based on the API response structure
  } catch (error) {
    console.error('Error during hotel search:', error.response?.data || error.message);
    throw new Error('Failed to fetch hotel data');
  }
};

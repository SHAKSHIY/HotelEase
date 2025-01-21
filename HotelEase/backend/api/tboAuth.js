import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

const TBO_API_URL = process.env.TBO_API_URL;
const TBO_API_USERNAME = process.env.TBO_API_USERNAME;
const TBO_API_PASSWORD = process.env.TBO_API_PASSWORD;

let cachedToken = null; // Cache token to avoid redundant requests
let tokenExpiry = null; // Store token expiry time

export const authenticate = async () => {
  // Use cached token if valid
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
    return cachedToken;
  }

  try {
    const response = await axios.post(`${TBO_API_URL}/authenticate`, {
      Username: TBO_API_USERNAME,
      Password: TBO_API_PASSWORD,
    });

    const { Token, Expiry } = response.data; // Adjust based on API response
    cachedToken = Token;
    tokenExpiry = Date.now() + Expiry * 1000; // Convert expiry to milliseconds

    return Token;
  } catch (error) {
    console.error('Authentication failed:', error.response?.data || error.message);
    throw new Error('Failed to authenticate with TBO API');
  }
};

import axios from 'axios';

// Backend base URL
const BACKEND_URL = 'http://localhost:5000/api/hotels';

// Fetch hotels using the backend API
export const searchHotels = async (query) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/search`, { query });
    return response.data;
  } catch (error) {
    console.error('Error fetching hotels:', error);
    throw error;
  }
};

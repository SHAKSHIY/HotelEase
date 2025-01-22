import express from 'express';
import { searchHotels } from '../api/tboHotelService.js';

const router = express.Router();

router.post('/search', async (req, res) => {
  const { query } = req.body;

  try {
    const results = await searchHotels(query);
    res.json(results); // Send results to the client
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

import express from 'express';
import cors from 'cors';
import hotelRoutes from './routes/hotelRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Use hotel routes
app.use('/api/hotels', hotelRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

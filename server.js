import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const app = express();
app.use(cors());

const API_KEY = process.env.N2YO_API_KEY;  
const BASE_URL = 'https://api.n2yo.com/rest/v1/satellite';

app.get('/api/iss', async (req, res) => {
  try {
    const observerLat = 0, observerLng = 0, observerAlt = 0;
    const url = `${BASE_URL}/positions/25544/${observerLat}/${observerLng}/${observerAlt}/1/&apiKey=${API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data.positions[0]);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch ISS data' });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));

const express = require('express');
const fetch = require('node-fetch'); // Library untuk memanggil API
const cors = require('cors'); // Untuk mengizinkan akses dari frontend

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint untuk pencarian
app.get('/api/search', async (req, res) => {
  const keyword = req.query.q; // Ambil keyword dari query parameter
  if (!keyword) {
    return res.status(400).json({ message: 'Query parameter "q" is required' });
  }

  try {
    const apiUrl = 'https://api.example.com/search?q=${encodeURIComponent(keyword)}';
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY', // Ganti dengan API Key Anda
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from API');
    }

    const data = await response.json();
    res.json(data); // Kirim data hasil pencarian ke frontend
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Jalankan server
app.listen(PORT, () => {
  console.log('Server running on http://localhost:${PORT}');
});
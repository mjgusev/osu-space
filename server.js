const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
require('dotenv').config();

const weather_api_key = process.env.WEATHERAPIKEY;

app.get('/gym-capacity', async (req, res) => {


  try {
    const response = await axios.get('https://recsports.osu.edu/fms/facilities/jos');
    const $ = cheerio.load(response.data);
    // Use the correct selector '#capacity4' to get the gym capacity
    const gymCapacity = $('#capacity4').text();
    res.json({ gymCapacity });
  } catch (error) {
    console.error('Error fetching gym capacity:', error);
    res.status(500).send('Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

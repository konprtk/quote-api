const express = require('express');
const app = express();
require('dotenv').config();

const quotes = process.env.QUOTES;
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static('public'));

async function fetchAndDisplayQuote() {
  try {
    const response = await fetch(quotes);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    let data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}

// Endpoint to get a random quote
app.get('/quote', async (req, res) => {
  try {
    const quoteData = await fetchAndDisplayQuote();
    if (!quoteData) throw new Error('No data received!');
    res.json(quoteData);
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Failed to fetch the quote. Please try again later.' });
  }
});

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(PORT, () =>
  console.log(`Quotes API running on http://localhost:${PORT}`)
);

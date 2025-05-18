const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Load data from db.json
const db = JSON.parse(fs.readFileSync('./data/db.json', 'utf-8'));

// Endpoints
app.get('/solutions', (req, res) => {
  res.json(db.solutions);
});

app.get('/letters', (req, res) => {
  res.json(db.letters);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
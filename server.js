const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, 'build'))); // Serve React build

// Load db.json
const db = JSON.parse(fs.readFileSync('./data/db.json', 'utf-8'));

// API Endpoints
app.get('/solutions', (req, res) => {
  res.json(db.solutions);
});

app.get('/letters', (req, res) => {
  res.json(db.letters);
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

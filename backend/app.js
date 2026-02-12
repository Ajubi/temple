// Express app to serve static React build from backend/view/dist
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'view', 'dist')));

// SPA fallback: serve index.html for non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'dist', 'index.html'));
});

module.exports = app;

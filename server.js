const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  const currentDate = new Date();
  res.render('index', {
    date: currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    time: currentDate.toLocaleTimeString('en-US')
  });
});

// API endpoint to get current date and time
app.get('/api/datetime', (req, res) => {
  const currentDate = new Date();
  res.json({
    date: currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    time: currentDate.toLocaleTimeString('en-US'),
    timestamp: currentDate.getTime()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
});

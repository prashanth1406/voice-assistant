const express = require('express');
const cors = require('cors');
const { PORT } = require('./config/env');
const trackingRoutes = require('./routes/tracking.route');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tracking', trackingRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

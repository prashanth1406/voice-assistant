const express = require('express');
const { getTrackingInfo } = require('../services/tracking.service');

const router = express.Router();

router.post('/', async (req, res) => {
  const { trackingNumber } = req.body;
  if (!trackingNumber) {
    return res.status(400).json({ error: 'trackingNumber is required in request body' });
  }
  try {
    const trackingInfo = await getTrackingInfo(trackingNumber);
    if (!trackingInfo) {
      return res.status(404).json({ error: 'Tracking info not found' });
    }
    res.json(trackingInfo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tracking information' });
  }
});

module.exports = router;

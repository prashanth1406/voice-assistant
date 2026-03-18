const axios = require('axios');
const { AFTERSHIP_API_KEY } = require('../config/env');

const aftershipClient = axios.create({
  baseURL: 'https://api.aftership.com/tracking/2024-10',
  headers: {
    'as-api-key': AFTERSHIP_API_KEY,
    'Content-Type': 'application/json',
  },
});

module.exports = aftershipClient;

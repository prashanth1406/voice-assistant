require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  AFTERSHIP_API_KEY: process.env.AFTERSHIP_API_KEY,
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
};

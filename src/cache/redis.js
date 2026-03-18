const Redis = require('ioredis');
const { REDIS_URL } = require('../config/env');

const redis = new Redis(REDIS_URL);

redis.on('error', (err) => {
  console.error('Redis error:', err);
});

module.exports = redis;

const aftershipClient = require('../clients/aftership.client');
const redis = require('../cache/redis');
const { formatTrackingData } = require('../utils/formatter');

const getTrackingInfo = async (trackingNumber) => {
  try {
    // Try to get from cache
    const cachedData = await redis.get(`tracking:${trackingNumber}`);
    if (cachedData) {
      console.log("Getting Tracking Information from Redis Cache")
      return JSON.parse(cachedData);
    }

    // Get from AfterShip REST API
    console.log("Getting Tracking Information from Aftership REST API")
    const response = await aftershipClient.get('/trackings', {
      params: {
        tracking_numbers: trackingNumber,
      },
    });

    const tracking = response.data.data.trackings && response.data.data.trackings.length > 0 
      ? response.data.data.trackings[0] 
      : null;
    const formattedData = formatTrackingData(tracking);

    // Cache for 1 hour
    if (formattedData) {
      await redis.set(`tracking:${trackingNumber}`, JSON.stringify(formattedData), 'EX', 3600);
    }

    return formattedData;
  } catch (error) {
    console.error(`Error getting tracking info for ${trackingNumber}:`, error);
    throw error;
  }
};

module.exports = {
  getTrackingInfo,
};

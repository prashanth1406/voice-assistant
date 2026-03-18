const formatTrackingData = (tracking) => {
  if (!tracking) return null;

  const sortedCheckpoints = tracking.checkpoints && tracking.checkpoints.length > 0
    ? [...tracking.checkpoints].sort((a, b) => new Date(b.checkpoint_time) - new Date(a.checkpoint_time))
    : [];

  return {
    id: tracking.id,
    trackingNumber: tracking.tracking_number,
    slug: tracking.slug,
    status: tracking.tag,
    substatus: tracking.subtag,
    latestCheckpoint: sortedCheckpoints.length > 0 ? sortedCheckpoints[0] : null,
    checkpoints: sortedCheckpoints,
    updatedAt: tracking.updated_at,
  };
};

module.exports = {
  formatTrackingData,
};

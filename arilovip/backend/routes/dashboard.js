const express = require('express');
const router = express.Router();

// @route   GET api/dashboard/stats
// @desc    Get dashboard stats
// @access  Private
router.get('/stats', (req, res) => {
  // Mock data for now
  const stats = {
    totalUsers: 1234,
    onlineUsers: 56,
    totalTraffic: 12.3,
    revenue: 1234,
  };
  res.json(stats);
});

module.exports = router;

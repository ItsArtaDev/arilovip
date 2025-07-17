const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Log = require('../models/Log');

// @route   GET api/logs
// @desc    Get all logs
// @access  Private (Admin)
router.get('/', [auth, auth.isAdmin], async (req, res) => {
  try {
    const logs = await Log.find().populate('user', 'username').sort({ date: -1 });
    res.json(logs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const Payment = require('../models/Payment');

// @route   GET api/reports/users
// @desc    Get users report
// @access  Private (Admin)
router.get('/users', [auth, auth.isAdmin], async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/reports/payments
// @desc    Get payments report
// @access  Private (Admin)
router.get('/payments', [auth, auth.isAdmin], async (req, res) => {
  try {
    const payments = await Payment.find().populate('user', 'username');
    res.json(payments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

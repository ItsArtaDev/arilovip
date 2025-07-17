const express = require('express');
const router = express.Router();
const User = require('../models/User');

// A simple, insecure auth mechanism for the Telegram bot
const TELEGRAM_API_KEY = 'your_telegram_api_key'; // Should be in config

const telegramAuth = (req, res, next) => {
  const apiKey = req.header('x-telegram-api-key');
  if (apiKey !== TELEGRAM_API_KEY) {
    return res.status(401).json({ msg: 'Unauthorized' });
  }
  next();
};

// @route   GET api/telegram/user-status/:username
// @desc    Get user status for Telegram bot
// @access  Private (Telegram Bot)
router.get('/user-status/:username', telegramAuth, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).select(
      '-password'
    );
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

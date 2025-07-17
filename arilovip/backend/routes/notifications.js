const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Notification = require('../models/Notification');

// @route   POST api/notifications
// @desc    Send a notification
// @access  Private (Admin)
router.post('/', [auth, auth.isAdmin], async (req, res) => {
  const { title, message, userId } = req.body;
  try {
    const newNotification = new Notification({
      title,
      message,
      user: userId, // if null, it's for all users
    });
    const notification = await newNotification.save();
    res.json(notification);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

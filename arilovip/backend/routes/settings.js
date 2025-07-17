const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Setting = require('../models/Setting');

// @route   GET api/settings
// @desc    Get all settings
// @access  Public
router.get('/', async (req, res) => {
  try {
    const settings = await Setting.find();
    const settingsMap = settings.reduce((acc, setting) => {
      acc[setting.key] = setting.value;
      return acc;
    }, {});
    res.json(settingsMap);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/settings
// @desc    Update settings
// @access  Private (Admin)
router.post('/', [auth, auth.isAdmin], async (req, res) => {
  const { logo, rules } = req.body;
  try {
    if (logo) {
      await Setting.findOneAndUpdate(
        { key: 'logo' },
        { value: logo },
        { upsert: true }
      );
    }
    if (rules) {
      await Setting.findOneAndUpdate(
        { key: 'rules' },
        { value: rules },
        { upsert: true }
      );
    }
    res.json({ msg: 'Settings updated' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

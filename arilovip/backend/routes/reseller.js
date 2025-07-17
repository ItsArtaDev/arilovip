const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// @route   POST api/reseller/create-user
// @desc    Reseller creates a user
// @access  Private (Reseller)
router.post('/create-user', auth, async (req, res) => {
  try {
    const reseller = await User.findById(req.user.id);
    if (reseller.role !== 'Reseller') {
      return res.status(403).json({ msg: 'Access denied' });
    }
    if (reseller.quota <= 0) {
      return res.status(400).json({ msg: 'Quota exceeded' });
    }

    const { username, password } = req.body;
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      username,
      password,
      role: 'User',
      reseller: req.user.id,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    reseller.quota -= 1;
    await reseller.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

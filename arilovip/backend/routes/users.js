const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../models/User');

// @route   GET api/users
// @desc    Get all users
// @access  Private (Admin)
router.get('/', [auth, auth.isAdmin], async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/users
// @desc    Create a user
// @access  Private (Admin)
router.post(
  '/',
  [
    auth,
    auth.isAdmin,
    [
      check('username', 'Username is required').not().isEmpty(),
      check('password', 'Password is required').isLength({ min: 6 }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password, role } = req.body;

    try {
      let user = await User.findOne({ username });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        username,
        password,
        role,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/users/:id
// @desc    Update a user
// @access  Private (Admin)
router.put('/:id', [auth, auth.isAdmin], async (req, res) => {
  const { username, role } = req.body;
  const userFields = {};
  if (username) userFields.username = username;
  if (role) userFields.role = role;

  try {
    let user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ msg: 'User not found' });

    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: userFields },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/users/:id
// @desc    Delete a user
// @access  Private (Admin)
router.delete('/:id', [auth, auth.isAdmin], async (req, res) => {
  try {
    let user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ msg: 'User not found' });

    await User.findByIdAndRemove(req.params.id);

    res.json({ msg: 'User removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

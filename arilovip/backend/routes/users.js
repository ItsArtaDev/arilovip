const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    Get all users
// @access  Private (Admin)
router.get('/', (req, res) => {
  res.send('Get all users');
});

// @route   POST api/users
// @desc    Create a user
// @access  Private (Admin)
router.post('/', (req, res) => {
  res.send('Create a user');
});

// @route   PUT api/users/:id
// @desc    Update a user
// @access  Private (Admin)
router.put('/:id', (req, res) => {
  res.send('Update a user');
});

// @route   DELETE api/users/:id
// @desc    Delete a user
// @access  Private (Admin)
router.delete('/:id', (req, res) => {
  res.send('Delete a user');
});

module.exports = router;

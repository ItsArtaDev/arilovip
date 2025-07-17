const User = require('../models/User');

// @route   POST api/auth/register
// @desc    Register user
// @access  Public
exports.register = async (req, res) => {
  res.send('Register logic will be here');
};

// @route   POST api/auth/login
// @desc    Login user / return JWT
// @access  Public
exports.login = async (req, res) => {
  res.send('Login logic will be here');
};

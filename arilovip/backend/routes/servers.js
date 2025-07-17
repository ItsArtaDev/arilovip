const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Server = require('../models/Server');

// @route   GET api/servers
// @desc    Get all servers
// @access  Private (Admin)
router.get('/', [auth, auth.isAdmin], async (req, res) => {
  try {
    const servers = await Server.find();
    res.json(servers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/servers
// @desc    Create a server
// @access  Private (Admin)
router.post('/', [auth, auth.isAdmin], async (req, res) => {
  const { name, address } = req.body;
  try {
    const newServer = new Server({
      name,
      address,
    });
    const server = await newServer.save();
    res.json(server);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/servers/:id
// @desc    Delete a server
// @access  Private (Admin)
router.delete('/:id', [auth, auth.isAdmin], async (req, res) => {
  try {
    await Server.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Server removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

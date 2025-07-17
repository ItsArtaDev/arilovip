const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../middleware/auth');
const Payment = require('../models/Payment');

const upload = multer({ dest: 'uploads/' });

// @route   POST api/payments/upload
// @desc    Upload a payment receipt
// @access  Private
router.post('/upload', [auth, upload.single('receipt')], async (req, res) => {
  try {
    const newPayment = new Payment({
      user: req.user.id,
      filePath: req.file.path,
    });
    const payment = await newPayment.save();
    res.json(payment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

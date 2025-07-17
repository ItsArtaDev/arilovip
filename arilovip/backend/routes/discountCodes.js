const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const DiscountCode = require('../models/DiscountCode');

// @route   GET api/discount-codes
// @desc    Get all discount codes
// @access  Private (Admin)
router.get('/', [auth, auth.isAdmin], async (req, res) => {
  try {
    const codes = await DiscountCode.find();
    res.json(codes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/discount-codes
// @desc    Create a discount code
// @access  Private (Admin)
router.post('/', [auth, auth.isAdmin], async (req, res) => {
  const { code, percentage, expiryDate, usageLimit } = req.body;
  try {
    const newCode = new DiscountCode({
      code,
      percentage,
      expiryDate,
      usageLimit,
    });
    const discountCode = await newCode.save();
    res.json(discountCode);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/discount-codes/:id
// @desc    Delete a discount code
// @access  Private (Admin)
router.delete('/:id', [auth, auth.isAdmin], async (req, res) => {
  try {
    await DiscountCode.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Discount code removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

const mongoose = require('mongoose');

const discountCodeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  usageLimit: {
    type: Number,
    required: true,
  },
  usageCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('DiscountCode', discountCodeSchema);

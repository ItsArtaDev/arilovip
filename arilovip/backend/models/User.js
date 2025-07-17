const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Admin', 'Reseller', 'User'],
    default: 'User',
  },
  reseller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  quota: {
    type: Number,
    default: 0,
  },
  expiryDate: {
    type: Date,
  },
  trafficUsed: {
    type: Number,
    default: 0,
  },
  trafficLimit: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('User', userSchema);

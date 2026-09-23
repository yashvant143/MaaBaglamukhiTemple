const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Devotee name is required'],
      trim: true
    },
    email: {
      type: String,
      lowercase: true,
      trim: true
    },
    mobile: {
      type: String,
      required: [true, 'Mobile number is required'],
      trim: true
    },
    message: {
      type: String,
      required: [true, 'Message content is required'],
      trim: true
    },
    status: {
      type: String,
      enum: ['pending', 'read', 'contacted'],
      default: 'pending'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Contact', contactSchema);

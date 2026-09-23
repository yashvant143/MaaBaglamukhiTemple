const mongoose = require('mongoose');

const panditSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Pandit Ji name is required'],
      trim: true
    },
    photo: {
      type: String,
      default: '/uploads/default-avatar.png'
    },
    designation: {
      type: String,
      required: [true, 'Designation is required'],
      trim: true
    },
    mobile: {
      type: String,
      required: [true, 'Mobile number is required'],
      trim: true
    },
    experience: {
      type: String,
      required: [true, 'Experience details are required'],
      trim: true
    },
    specialization: {
      type: [String],
      required: [true, 'At least one specialization is required'],
      set: (val) => {
        if (Array.isArray(val)) return val;
        if (typeof val === 'string') return val.split(',').map((s) => s.trim()).filter(Boolean);
        return val;
      }
    },
    languages: {
      type: [String],
      required: [true, 'At least one language is required'],
      set: (val) => {
        if (Array.isArray(val)) return val;
        if (typeof val === 'string') return val.split(',').map((s) => s.trim()).filter(Boolean);
        return val;
      }
    },
    address: {
      type: String,
      default: 'Nalkheda, Madhya Pradesh'
    },
    description: {
      type: String,
      trim: true
    },
    availability: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Pandit', panditSchema);

const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Image title is required'],
      trim: true
    },
    image: {
      type: String,
      required: [true, 'Image path/URL is required']
    },
    category: {
      type: String,
      enum: ['Temple', 'Festival', 'Pooja', 'Events', 'General'],
      default: 'General'
    },
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Gallery', gallerySchema);

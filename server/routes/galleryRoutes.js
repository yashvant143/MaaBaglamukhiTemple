const express = require('express');
const {
  getGallery,
  uploadGalleryImage,
  deleteGalleryImage
} = require('../controllers/galleryController');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

// Public Route
router.get('/', getGallery);

// Protected Admin Routes
router.post('/', protect, adminOnly, upload.single('image'), uploadGalleryImage);
router.delete('/:id', protect, adminOnly, deleteGalleryImage);

module.exports = router;

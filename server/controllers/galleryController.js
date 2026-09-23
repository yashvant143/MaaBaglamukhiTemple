const Gallery = require('../models/Gallery');
const asyncHandler = require('../utils/asyncHandler');
const { ApiError, ApiResponse } = require('../utils/apiResponse');
const fs = require('fs');
const path = require('path');

// @desc    Get gallery items
// @route   GET /api/gallery
// @access  Public
const getGallery = asyncHandler(async (req, res) => {
  const { category, page = 1, limit = 20 } = req.query;

  const query = {};
  if (category) {
    query.category = category;
  }

  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const skip = (pageNum - 1) * limitNum;

  const total = await Gallery.countDocuments(query);
  const items = await Gallery.find(query)
    .sort({ uploadedAt: -1 })
    .skip(skip)
    .limit(limitNum);

  return ApiResponse.success(
    res,
    {
      items,
      pagination: {
        total,
        page: pageNum,
        pages: Math.ceil(total / limitNum) || 1,
        limit: limitNum
      }
    },
    'Gallery items fetched successfully'
  );
});

// @desc    Upload image to gallery
// @route   POST /api/gallery
// @access  Private (Admin)
const uploadGalleryImage = asyncHandler(async (req, res) => {
  const { title, category } = req.body;

  if (!req.file) {
    throw new ApiError('Image file is required for gallery upload', 400);
  }

  const imagePath = `/uploads/${req.file.filename}`;

  const galleryItem = await Gallery.create({
    title: title || req.file.originalname,
    image: imagePath,
    category: category || 'General'
  });

  return ApiResponse.success(res, galleryItem, 'Image uploaded to gallery successfully', 201);
});

// @desc    Delete image from gallery
// @route   DELETE /api/gallery/:id
// @access  Private (Admin)
const deleteGalleryImage = asyncHandler(async (req, res) => {
  const item = await Gallery.findById(req.params.id);
  if (!item) {
    throw new ApiError('Gallery item not found', 404);
  }

  // Remove local file
  if (item.image) {
    const filePath = path.join(__dirname, '..', item.image);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  await item.deleteOne();
  return ApiResponse.success(res, null, 'Gallery item deleted successfully');
});

module.exports = {
  getGallery,
  uploadGalleryImage,
  deleteGalleryImage
};

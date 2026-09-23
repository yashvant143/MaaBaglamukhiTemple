const Pandit = require('../models/Pandit');
const asyncHandler = require('../utils/asyncHandler');
const { ApiError, ApiResponse } = require('../utils/apiResponse');
const fs = require('fs');
const path = require('path');

// @desc    Get all Pandits (with search, filter & pagination)
// @route   GET /api/pandits
// @access  Public
const getPandits = asyncHandler(async (req, res) => {
  const { search, available, specialization, page = 1, limit = 10 } = req.query;

  const query = {};

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { specialization: { $regex: search, $options: 'i' } },
      { languages: { $regex: search, $options: 'i' } }
    ];
  }

  if (available !== undefined) {
    query.availability = available === 'true';
  }

  if (specialization) {
    query.specialization = { $regex: specialization, $options: 'i' };
  }

  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const skip = (pageNum - 1) * limitNum;

  const total = await Pandit.countDocuments(query);
  const pandits = await Pandit.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNum);

  return ApiResponse.success(
    res,
    {
      pandits,
      pagination: {
        total,
        page: pageNum,
        pages: Math.ceil(total / limitNum) || 1,
        limit: limitNum
      }
    },
    'Pandit directory fetched successfully'
  );
});

// @desc    Get single Pandit details
// @route   GET /api/pandits/:id
// @access  Public
const getPanditById = asyncHandler(async (req, res) => {
  const pandit = await Pandit.findById(req.params.id);
  if (!pandit) {
    throw new ApiError('Pandit not found', 404);
  }
  return ApiResponse.success(res, pandit, 'Pandit details fetched successfully');
});

// @desc    Create new Pandit
// @route   POST /api/pandits
// @access  Private (Admin)
const createPandit = asyncHandler(async (req, res) => {
  const {
    name,
    designation,
    mobile,
    experience,
    specialization,
    languages,
    address,
    description,
    availability
  } = req.body;

  let photo = '/uploads/default-avatar.png';
  if (req.file) {
    photo = `/uploads/${req.file.filename}`;
  }

  const pandit = await Pandit.create({
    name,
    photo,
    designation,
    mobile,
    experience,
    specialization,
    languages,
    address: address || 'Nalkheda, Madhya Pradesh',
    description,
    availability: availability !== undefined ? availability : true
  });

  return ApiResponse.success(res, pandit, 'Pandit added successfully', 201);
});

// @desc    Update Pandit details
// @route   PUT /api/pandits/:id
// @access  Private (Admin)
const updatePandit = asyncHandler(async (req, res) => {
  let pandit = await Pandit.findById(req.params.id);
  if (!pandit) {
    throw new ApiError('Pandit not found', 404);
  }

  const updateFields = { ...req.body };

  if (req.file) {
    // Delete old uploaded file if it's not the default avatar
    if (pandit.photo && !pandit.photo.includes('default-avatar.png')) {
      const oldPath = path.join(__dirname, '..', pandit.photo);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }
    updateFields.photo = `/uploads/${req.file.filename}`;
  }

  pandit = await Pandit.findByIdAndUpdate(req.params.id, updateFields, {
    new: true,
    runValidators: true
  });

  return ApiResponse.success(res, pandit, 'Pandit updated successfully');
});

// @desc    Delete Pandit
// @route   DELETE /api/pandits/:id
// @access  Private (Admin)
const deletePandit = asyncHandler(async (req, res) => {
  const pandit = await Pandit.findById(req.params.id);
  if (!pandit) {
    throw new ApiError('Pandit not found', 404);
  }

  // Remove photo file if custom
  if (pandit.photo && !pandit.photo.includes('default-avatar.png')) {
    const filePath = path.join(__dirname, '..', pandit.photo);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  await pandit.deleteOne();
  return ApiResponse.success(res, null, 'Pandit removed successfully');
});

// @desc    Toggle Pandit availability status
// @route   PATCH /api/pandits/:id/availability
// @access  Private (Admin)
const toggleAvailability = asyncHandler(async (req, res) => {
  const pandit = await Pandit.findById(req.params.id);
  if (!pandit) {
    throw new ApiError('Pandit not found', 404);
  }

  pandit.availability = !pandit.availability;
  await pandit.save();

  return ApiResponse.success(
    res,
    pandit,
    `Pandit availability set to ${pandit.availability ? 'Available' : 'Unavailable'}`
  );
});

module.exports = {
  getPandits,
  getPanditById,
  createPandit,
  updatePandit,
  deletePandit,
  toggleAvailability
};

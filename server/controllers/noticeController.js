const Notice = require('../models/Notice');
const asyncHandler = require('../utils/asyncHandler');
const { ApiError, ApiResponse } = require('../utils/apiResponse');

// @desc    Get all notices
// @route   GET /api/notices
// @access  Public
const getNotices = asyncHandler(async (req, res) => {
  const { activeOnly = 'true' } = req.query;

  const query = {};
  if (activeOnly === 'true') {
    query.isActive = true;
    query.$or = [
      { expiryDate: { $exists: false } },
      { expiryDate: null },
      { expiryDate: { $gte: new Date() } }
    ];
  }

  const notices = await Notice.find(query).sort({ createdAt: -1 });
  return ApiResponse.success(res, notices, 'Notices fetched successfully');
});

// @desc    Get single notice
// @route   GET /api/notices/:id
// @access  Public
const getNoticeById = asyncHandler(async (req, res) => {
  const notice = await Notice.findById(req.params.id);
  if (!notice) {
    throw new ApiError('Notice not found', 404);
  }
  return ApiResponse.success(res, notice, 'Notice details fetched successfully');
});

// @desc    Create notice
// @route   POST /api/notices
// @access  Private (Admin)
const createNotice = asyncHandler(async (req, res) => {
  const { title, description, expiryDate, isActive } = req.body;

  const notice = await Notice.create({
    title,
    description,
    expiryDate: expiryDate ? new Date(expiryDate) : null,
    isActive: isActive !== undefined ? isActive : true
  });

  return ApiResponse.success(res, notice, 'Notice published successfully', 201);
});

// @desc    Update notice
// @route   PUT /api/notices/:id
// @access  Private (Admin)
const updateNotice = asyncHandler(async (req, res) => {
  let notice = await Notice.findById(req.params.id);
  if (!notice) {
    throw new ApiError('Notice not found', 404);
  }

  notice = await Notice.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  return ApiResponse.success(res, notice, 'Notice updated successfully');
});

// @desc    Delete notice
// @route   DELETE /api/notices/:id
// @access  Private (Admin)
const deleteNotice = asyncHandler(async (req, res) => {
  const notice = await Notice.findById(req.params.id);
  if (!notice) {
    throw new ApiError('Notice not found', 404);
  }

  await notice.deleteOne();
  return ApiResponse.success(res, null, 'Notice deleted successfully');
});

module.exports = {
  getNotices,
  getNoticeById,
  createNotice,
  updateNotice,
  deleteNotice
};

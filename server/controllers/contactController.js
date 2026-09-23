const Contact = require('../models/Contact');
const asyncHandler = require('../utils/asyncHandler');
const { ApiError, ApiResponse } = require('../utils/apiResponse');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = asyncHandler(async (req, res) => {
  const { name, email, mobile, message } = req.body;

  if (!name || !mobile || !message) {
    throw new ApiError('Name, mobile number, and message are required fields', 400);
  }

  const contact = await Contact.create({
    name,
    email,
    mobile,
    message
  });

  return ApiResponse.success(
    res,
    contact,
    'Your message has been submitted successfully. We will get back to you soon!',
    201
  );
});

// @desc    Get contact form submissions
// @route   GET /api/contact
// @access  Private (Admin)
const getContactSubmissions = asyncHandler(async (req, res) => {
  const { status, page = 1, limit = 10 } = req.query;

  const query = {};
  if (status) {
    query.status = status;
  }

  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const skip = (pageNum - 1) * limitNum;

  const total = await Contact.countDocuments(query);
  const submissions = await Contact.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNum);

  return ApiResponse.success(
    res,
    {
      submissions,
      pagination: {
        total,
        page: pageNum,
        pages: Math.ceil(total / limitNum) || 1,
        limit: limitNum
      }
    },
    'Contact form submissions fetched successfully'
  );
});

// @desc    Get contact submission details & mark as read
// @route   GET /api/contact/:id
// @access  Private (Admin)
const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    throw new ApiError('Contact submission not found', 404);
  }

  if (contact.status === 'pending') {
    contact.status = 'read';
    await contact.save();
  }

  return ApiResponse.success(res, contact, 'Contact message details fetched');
});

// @desc    Delete contact submission
// @route   DELETE /api/contact/:id
// @access  Private (Admin)
const deleteContactSubmission = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    throw new ApiError('Contact submission not found', 404);
  }

  await contact.deleteOne();
  return ApiResponse.success(res, null, 'Contact submission deleted successfully');
});

module.exports = {
  submitContactForm,
  getContactSubmissions,
  getContactById,
  deleteContactSubmission
};

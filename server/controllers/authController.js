const Admin = require('../models/Admin');
const asyncHandler = require('../utils/asyncHandler');
const { ApiError, ApiResponse } = require('../utils/apiResponse');
const generateToken = require('../utils/generateToken');

// @desc    Admin login & get token
// @route   POST /api/auth/login
// @access  Public
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError('Please provide both email and password', 400);
  }

  // Find admin and explicitly select password field
  const admin = await Admin.findOne({ email: email.toLowerCase() }).select('+password');

  if (!admin || !(await admin.matchPassword(password))) {
    throw new ApiError('Invalid email or password', 401);
  }

  const token = generateToken(admin._id, admin.role);

  return ApiResponse.success(
    res,
    {
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    },
    'Admin logged in successfully'
  );
});

// @desc    Get logged in admin profile
// @route   GET /api/auth/me
// @access  Private (Admin)
const getMe = asyncHandler(async (req, res) => {
  return ApiResponse.success(res, req.user, 'Admin profile fetched successfully');
});

// @desc    Logout Admin
// @route   POST /api/auth/logout
// @access  Private (Admin)
const logoutAdmin = asyncHandler(async (req, res) => {
  return ApiResponse.success(res, null, 'Logged out successfully');
});

module.exports = {
  loginAdmin,
  getMe,
  logoutAdmin
};

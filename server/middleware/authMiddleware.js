const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const asyncHandler = require('../utils/asyncHandler');
const { ApiError } = require('../utils/apiResponse');

/**
 * Protect routes - require valid JWT Authorization token
 */
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    throw new ApiError('Not authorized to access this route, no token provided', 401);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'maabagalamukhinalkhedasecretkey123456!');
    const admin = await Admin.findById(decoded.id).select('-password');

    if (!admin) {
      throw new ApiError('User account associated with token no longer exists', 401);
    }

    req.user = admin;
    next();
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError('Not authorized, token failed or expired', 401);
  }
});

/**
 * Role authorization middleware (Admin only)
 */
const adminOnly = (req, res, next) => {
  if (req.user && (req.user.role === 'admin' || req.user.role === 'superadmin')) {
    next();
  } else {
    throw new ApiError('Access denied: Admin privileges required', 403);
  }
};

module.exports = {
  protect,
  adminOnly
};

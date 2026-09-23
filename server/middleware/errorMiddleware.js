const { ApiError, ApiResponse } = require('../utils/apiResponse');

const errorHandler = (err, req, res, next) => {
  let error = err;

  // Log error for development debugging
  console.error(`[Error Log]: ${err.stack || err.message}`);

  // Mongoose Bad ObjectId (CastError)
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    error = new ApiError(message, 404);
  }

  // Mongoose Duplicate Key Error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0] || 'field';
    const message = `Duplicate value entered for ${field}. Please use another value.`;
    error = new ApiError(message, 400);
  }

  // Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map((val) => ({
      field: val.path,
      message: val.message
    }));
    error = new ApiError('Validation Error', 400, errors);
  }

  // Multer Upload Errors
  if (err.name === 'MulterError') {
    error = new ApiError(`File upload error: ${err.message}`, 400);
  }

  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';
  const errors = error.errors || [];

  return res.status(statusCode).json({
    success: false,
    message,
    errors: errors.length > 0 ? errors : undefined,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

const notFound = (req, res, next) => {
  const error = new ApiError(`Route not found - ${req.originalUrl}`, 404);
  next(error);
};

module.exports = {
  errorHandler,
  notFound
};

class ApiError extends Error {
  constructor(message, statusCode, errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.success = false;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ApiResponse {
  static success(res, data = null, message = 'Success', statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      message,
      data
    });
  }

  static error(res, message = 'Error', statusCode = 500, errors = []) {
    return res.status(statusCode).json({
      success: false,
      message,
      errors
    });
  }
}

module.exports = {
  ApiError,
  ApiResponse
};

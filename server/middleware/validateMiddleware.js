const { validationResult } = require('express-validator');
const { ApiError } = require('../utils/apiResponse');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const extractedErrors = errors.array().map((err) => ({
      field: err.path || err.param,
      message: err.msg
    }));
    throw new ApiError('Validation Error', 400, extractedErrors);
  }
  next();
};

module.exports = validate;

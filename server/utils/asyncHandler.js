/**
 * Async Handler Wrapper for Express Controllers
 * Eliminates explicit try/catch blocks in routes
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;

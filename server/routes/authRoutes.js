const express = require('express');
const { body } = require('express-validator');
const { loginAdmin, getMe, logoutAdmin } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const validate = require('../middleware/validateMiddleware');

const router = express.Router();

// Admin Login Validation
const loginValidation = [
  body('email').isEmail().withMessage('Please provide a valid email address'),
  body('password').notEmpty().withMessage('Password is required'),
  validate
];

router.post('/login', loginValidation, loginAdmin);
router.get('/me', protect, getMe);
router.post('/logout', protect, logoutAdmin);

module.exports = router;

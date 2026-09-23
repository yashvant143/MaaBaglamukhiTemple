const express = require('express');
const { body } = require('express-validator');
const {
  submitContactForm,
  getContactSubmissions,
  getContactById,
  deleteContactSubmission
} = require('../controllers/contactController');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const validate = require('../middleware/validateMiddleware');

const router = express.Router();

// Contact Form Input Validation
const contactValidation = [
  body('name').notEmpty().trim().withMessage('Devotee name is required'),
  body('mobile').notEmpty().trim().withMessage('Mobile number is required'),
  body('message').notEmpty().trim().withMessage('Message is required'),
  body('email').optional({ checkFalsy: true }).isEmail().withMessage('Please provide a valid email'),
  validate
];

// Public Route
router.post('/', contactValidation, submitContactForm);

// Protected Admin Routes
router.get('/', protect, adminOnly, getContactSubmissions);
router.get('/:id', protect, adminOnly, getContactById);
router.delete('/:id', protect, adminOnly, deleteContactSubmission);

module.exports = router;

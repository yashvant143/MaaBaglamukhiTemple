const express = require('express');
const { body } = require('express-validator');
const {
  getPandits,
  getPanditById,
  createPandit,
  updatePandit,
  deletePandit,
  toggleAvailability
} = require('../controllers/panditController');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const validate = require('../middleware/validateMiddleware');

const router = express.Router();

// Pandit Input Validation
const panditValidation = [
  body('name').notEmpty().withMessage('Pandit Ji name is required'),
  body('designation').notEmpty().withMessage('Designation is required'),
  body('mobile').notEmpty().withMessage('Mobile number is required'),
  body('experience').notEmpty().withMessage('Experience is required'),
  validate
];

// Public Routes
router.get('/', getPandits);
router.get('/:id', getPanditById);

// Protected Admin Routes
router.post('/', protect, adminOnly, upload.single('photo'), panditValidation, createPandit);
router.put('/:id', protect, adminOnly, upload.single('photo'), updatePandit);
router.delete('/:id', protect, adminOnly, deletePandit);
router.patch('/:id/availability', protect, adminOnly, toggleAvailability);

module.exports = router;

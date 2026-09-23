const express = require('express');
const { body } = require('express-validator');
const {
  getNotices,
  getNoticeById,
  createNotice,
  updateNotice,
  deleteNotice
} = require('../controllers/noticeController');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const validate = require('../middleware/validateMiddleware');

const router = express.Router();

// Notice Input Validation
const noticeValidation = [
  body('title').notEmpty().withMessage('Notice title is required'),
  body('description').notEmpty().withMessage('Notice description is required'),
  validate
];

// Public Routes
router.get('/', getNotices);
router.get('/:id', getNoticeById);

// Protected Admin Routes
router.post('/', protect, adminOnly, noticeValidation, createNotice);
router.put('/:id', protect, adminOnly, updateNotice);
router.delete('/:id', protect, adminOnly, deleteNotice);

module.exports = router;

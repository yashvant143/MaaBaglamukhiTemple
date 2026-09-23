const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

// Import routes
const authRoutes = require('./routes/authRoutes');
const panditRoutes = require('./routes/panditRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const noticeRoutes = require('./routes/noticeRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Import error middleware
const { errorHandler, notFound } = require('./middleware/errorMiddleware');

const app = express();

// Security Middlewares
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({ origin: '*', credentials: true }));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP Request Logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Serve uploaded static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Root Endpoint / Health Check
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to Maa Bagalamukhi Temple Nalkheda Official API',
    version: '1.0.0',
    documentation: '/api/docs'
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/pandits', panditRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/contact', contactRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;

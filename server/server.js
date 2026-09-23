const dotenv = require('dotenv');
// Load environment variables
dotenv.config();

const app = require('./app');
const connectDB = require('./config/db');
const seedData = require('./utils/seedData');

const PORT = process.env.PORT || 5000;

// Connect to Database and start server
const startServer = async () => {
  try {
    // 1. Connect MongoDB
    await connectDB();

    // 2. Auto Seed Admin & Initial Pandit Data if needed
    await seedData();

    // 3. Start listening for incoming HTTP requests
    const server = app.listen(PORT, () => {
      console.log(`====================================================`);
      console.log(` Maa Bagalamukhi Temple Backend Running!`);
      console.log(` Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(` Server URL : http://localhost:${PORT}`);
      console.log(` API Endpoint: http://localhost:${PORT}/api`);
      console.log(`====================================================`);
    });

    // Handle Unhandled Promise Rejections
    process.on('unhandledRejection', (err, promise) => {
      console.error(`[Unhandled Rejection]: ${err.message}`);
      // Close server & exit process
      server.close(() => process.exit(1));
    });
  } catch (error) {
    console.error(`[Failed to Start Server]: ${error.message}`);
    process.exit(1);
  }
};

startServer();

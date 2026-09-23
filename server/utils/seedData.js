const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('../models/Admin');
const Pandit = require('../models/Pandit');
const connectDB = require('../config/db');

dotenv.config();

const dummyPandits = [
  {
    name: 'Pt. Ramesh Sharma',
    photo: '/uploads/default-avatar.png',
    designation: 'Senior Pandit',
    mobile: '9876543210',
    experience: '22 Years',
    specialization: ['Bagalamukhi Anushthan', 'Vedic Pooja'],
    languages: ['Hindi', 'Sanskrit'],
    address: 'Maa Bagalamukhi Temple Complex, Nalkheda',
    description: 'Experienced in conducting sacred Bagalamukhi Anushthan & Mahayajna.',
    availability: true
  },
  {
    name: 'Pt. Mahesh Joshi',
    photo: '/uploads/default-avatar.png',
    designation: 'Guru Ji',
    mobile: '9876543211',
    experience: '18 Years',
    specialization: ['Maha Mrityunjaya Jaap', 'Kalsarp Dosh Nivaran'],
    languages: ['Hindi'],
    address: 'Nalkheda, Madhya Pradesh',
    description: 'Specialist in Maha Mrityunjaya Jaap and dosha nivaran poojas.',
    availability: true
  },
  {
    name: 'Pt. Suresh Vyas',
    photo: '/uploads/default-avatar.png',
    designation: 'Temple Priest',
    mobile: '9876543212',
    experience: '15 Years',
    specialization: ['Rudrabhishek', 'Sahasranam Path'],
    languages: ['Hindi'],
    address: 'Nalkheda, Madhya Pradesh',
    description: 'Devoted temple priest performing daily rituals and Rudrabhishek.',
    availability: true
  },
  {
    name: 'Pt. Rajendra Upadhyay',
    photo: '/uploads/default-avatar.png',
    designation: 'Senior Guru Ji',
    mobile: '9876543213',
    experience: '25 Years',
    specialization: ['Navgraha Pooja', 'Pitru Dosh Shanti'],
    languages: ['Hindi', 'Sanskrit'],
    address: 'Near Lakhundar River, Nalkheda',
    description: 'Senior astrologer and expert in Navgraha Shanti rituals.',
    availability: true
  },
  {
    name: 'Pt. Amit Shastri',
    photo: '/uploads/default-avatar.png',
    designation: 'Pandit Ji',
    mobile: '9876543214',
    experience: '12 Years',
    specialization: ['Grah Shanti', 'Vastu Shastra'],
    languages: ['Hindi'],
    address: 'Nalkheda, Madhya Pradesh',
    description: 'Specializes in family peace, Grah Shanti, and home rituals.',
    availability: true
  },
  {
    name: 'Pt. Deepak Mishra',
    photo: '/uploads/default-avatar.png',
    designation: 'Temple Priest',
    mobile: '9876543215',
    experience: '10 Years',
    specialization: ['Satyanarayan Katha', 'Sundarkand Path'],
    languages: ['Hindi'],
    address: 'Nalkheda, Madhya Pradesh',
    description: 'Expert reciter of Satyanarayan Vrat Katha & Ramcharitmanas.',
    availability: true
  },
  {
    name: 'Pt. Vinod Dubey',
    photo: '/uploads/default-avatar.png',
    designation: 'Pandit Ji',
    mobile: '9876543216',
    experience: '9 Years',
    specialization: ['Durga Saptashati', 'Chandi Path'],
    languages: ['Hindi'],
    address: 'Nalkheda, Madhya Pradesh',
    description: 'Experienced in Devi Upasana & Chandi Path rituals.',
    availability: true
  },
  {
    name: 'Pt. Mukesh Tiwari',
    photo: '/uploads/default-avatar.png',
    designation: 'Guru Ji',
    mobile: '9876543217',
    experience: '20 Years',
    specialization: ['Bagalamukhi Sadhna', 'Tantra Shanti'],
    languages: ['Hindi'],
    address: 'Nalkheda, Madhya Pradesh',
    description: 'Renowned for Bagalamukhi Sadhna and tantra nivaran rituals.',
    availability: true
  }
];

const seedData = async () => {
  try {
    await connectDB();

    // Check if Admin exists
    const adminEmail = process.env.ADMIN_DEFAULT_EMAIL || 'admin@maabagalamukhi.org';
    const adminPassword = process.env.ADMIN_DEFAULT_PASSWORD || 'Admin@123456';

    const existingAdmin = await Admin.findOne({ email: adminEmail });
    if (!existingAdmin) {
      await Admin.create({
        name: 'Maa Bagalamukhi Admin',
        email: adminEmail,
        password: adminPassword,
        role: 'admin'
      });
      console.log(`[Seed Success]: Default Admin created (${adminEmail})`);
    } else {
      console.log(`[Seed Info]: Admin (${adminEmail}) already exists`);
    }

    // Check if Pandits exist
    const panditCount = await Pandit.countDocuments();
    if (panditCount === 0) {
      await Pandit.insertMany(dummyPandits);
      console.log(`[Seed Success]: Inserted ${dummyPandits.length} dummy Pandits from PRD.`);
    } else {
      console.log(`[Seed Info]: ${panditCount} Pandits already exist in database.`);
    }

    console.log('[Seed Completed Successfully]');
    if (require.main === module) {
      process.exit(0);
    }
  } catch (error) {
    console.error(`[Seed Error]: ${error.message}`);
    if (require.main === module) {
      process.exit(1);
    }
  }
};

if (require.main === module) {
  seedData();
}

module.exports = seedData;

/**
 * Optional Cloudinary Configuration
 * Use this module if you wish to upload images directly to Cloudinary CDN
 * instead of local server uploads.
 */

// Placeholder for optional Cloudinary setup
const cloudinaryConfig = () => {
  return {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
    api_key: process.env.CLOUDINARY_API_KEY || '',
    api_secret: process.env.CLOUDINARY_API_SECRET || ''
  };
};

module.exports = cloudinaryConfig;

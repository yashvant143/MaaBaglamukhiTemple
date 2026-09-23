import React, { useState, useEffect } from 'react';
import GalleryGrid from '../components/GalleryGrid';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorAlert from '../components/ErrorAlert';
import { fetchGallery } from '../services/api';

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadGalleryData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchGallery();
      setImages(data);
    } catch (err) {
      setError('Failed to fetch gallery images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGalleryData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-saffron-100 text-saffron-800 font-bold text-xs border border-saffron-300">
          ॥ मंदिर चित्रदीर्घा • Photo Gallery ॥
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-devanagari text-crimson-700">
          Temple Gallery & Divine Shringar
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 font-poppins">
          Glimpses of daily divine darshan, festival celebrations, Hawan Yajna, and serene temple architecture of Maa Bagalamukhi Nalkheda.
        </p>
      </div>

      {loading ? (
        <LoadingSpinner message="Loading temple photos..." />
      ) : error ? (
        <ErrorAlert message={error} onRetry={loadGalleryData} />
      ) : (
        <GalleryGrid images={images} />
      )}
    </div>
  );
};

export default GalleryPage;

import React, { useState, useEffect } from 'react';
import { Search, Filter, Phone, CheckCircle, RefreshCw } from 'lucide-react';
import PanditCard from '../components/PanditCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorAlert from '../components/ErrorAlert';
import { fetchPandits } from '../services/api';

const PanditDirectory = () => {
  const [pandits, setPandits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('');

  const specializationsList = [
    'All Specializations',
    'Bagalamukhi Anushthan',
    'Maha Mrityunjaya Jaap',
    'Rudrabhishek',
    'Navgraha Pooja',
    'Grah Shanti',
    'Satyanarayan Katha',
    'Durga Saptashati'
  ];

  const loadPanditsData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPandits({
        search: searchTerm,
        specialization: selectedSpecialization === 'All Specializations' ? '' : selectedSpecialization,
        available: availabilityFilter
      });
      setPandits(data);
    } catch (err) {
      setError('Failed to fetch Pandit Directory. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPanditsData();
  }, [searchTerm, selectedSpecialization, availabilityFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-saffron-100 text-saffron-800 font-bold text-xs border border-saffron-300">
          ॥ पूज्य पंडित एवं गुरु जन निर्देशिका ॥
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-devanagari text-crimson-700">
          Pandit Ji & Guru Ji Directory
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 font-poppins">
          Connect directly with temple authorized priests for Pooja booking, Bagalamukhi Anushthan, Hawan, and astrological guidance.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="p-6 rounded-2xl bg-white divine-border shadow-temple space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Search Bar */}
          <div className="md:col-span-6 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by Pandit name, specialization, or language..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 text-sm font-medium outline-none transition-all"
            />
          </div>

          {/* Specialization Filter */}
          <div className="md:col-span-4">
            <select
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
              className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 text-sm font-medium outline-none bg-white transition-all"
            >
              {specializationsList.map((spec, idx) => (
                <option key={idx} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>

          {/* Availability Filter */}
          <div className="md:col-span-2">
            <select
              value={availabilityFilter}
              onChange={(e) => setAvailabilityFilter(e.target.value)}
              className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 text-sm font-medium outline-none bg-white transition-all"
            >
              <option value="">All Status</option>
              <option value="true">Available Now</option>
              <option value="false">Busy</option>
            </select>
          </div>
        </div>

        {/* Active Filter Count & Reset */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
          <span>Found <b>{pandits.length}</b> verified Pandit Ji records</span>
          {(searchTerm || selectedSpecialization || availabilityFilter) && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSpecialization('');
                setAvailabilityFilter('');
              }}
              className="text-saffron-600 font-bold hover:underline flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" /> Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Pandit Cards Grid */}
      {loading ? (
        <LoadingSpinner message="Loading Pandit Directory..." />
      ) : error ? (
        <ErrorAlert message={error} onRetry={loadPanditsData} />
      ) : pandits.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl divine-border p-8">
          <p className="text-base font-bold text-gray-700">No Pandit records matched your search filters.</p>
          <p className="text-xs text-gray-500 mt-1">Try resetting search filters or keywords.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pandits.map((pandit) => (
            <PanditCard key={pandit._id} pandit={pandit} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PanditDirectory;

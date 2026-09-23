import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBannerImage from '../assets/images/maa-bagalamukhi-banner.jpg';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-devotional-dark min-h-[550px] sm:min-h-[640px] lg:min-h-[720px] flex items-center">
      {/* Background Image with Object-Cover & High Aspect Quality */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBannerImage}
          alt="Shree Maa Bagalamukhi Nalkheda Banner"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
        />
        {/* Subtle Dark Gradient Overlay for Text Readability & Golden Aura */}
        <div className="absolute inset-0 bg-gradient-to-t from-devotional-dark via-devotional-dark/75 to-black/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-devotional-dark/90" />
      </div>

      {/* Decorative Golden Light Ray Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-gold-500/20 via-saffron-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full text-center sm:text-left">
        <div className="max-w-3xl">
          {/* Sacred Mantra & Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron-500/30 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-semibold mb-6 shadow-temple"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Siddhapeeth Trishakti Dham • Nalkheda</span>
          </motion.div>

          {/* Main Title - Shree Maa Bagalamukhi Temple */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-devanagari text-white tracking-tight leading-tight text-shadow-lg"
          >
            Shree Maa Bagalamukhi <br className="hidden sm:inline" />
            <span className="gold-gradient-text drop-shadow">Temple Nalkheda</span>
          </motion.h1>

          {/* Subtitle - Nalkheda, Madhya Pradesh */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="flex items-center justify-center sm:justify-start gap-2 mt-4 text-saffron-400 font-bold text-lg sm:text-xl tracking-wide uppercase font-poppins"
          >
            <MapPin className="w-5 h-5 text-gold-400" />
            <span>Nalkheda, Madhya Pradesh</span>
          </motion.div>

          {/* Devotional Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-5 text-base sm:text-lg text-gray-200 leading-relaxed font-poppins max-w-2xl text-shadow"
          >
            Welcome to the divine abode of Supreme Power Shree Pitambara Devi. Experience spiritual peace, official daily darshan, authentic Vedic Pooja Anushthan, and connect directly with verified temple priests (Pandit Ji).
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4"
          >
            <Link
              to="/pandits"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-saffron-500 via-saffron-600 to-crimson-700 text-white font-bold text-base shadow-saffron-glow hover:scale-105 active:scale-95 transition-all duration-300 border border-gold-300/40"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Pandit Ji</span>
              <ChevronRight className="w-5 h-5" />
            </Link>

            <Link
              to="/about"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-gold-300 font-semibold text-base border border-gold-400/40 hover:text-white transition-all duration-300"
            >
              <ShieldCheck className="w-5 h-5 text-gold-400" />
              <span>Explore Temple History</span>
            </Link>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.85 }}
            className="mt-12 grid grid-cols-3 gap-4 pt-8 border-t border-gold-500/20 max-w-lg"
          >
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-gold-400 font-devanagari">महापीठ</p>
              <p className="text-xs text-gray-300 mt-1">Trishakti Siddhapeeth</p>
            </div>
            <div className="text-center sm:text-left border-x border-gold-500/20 px-3">
              <p className="text-2xl sm:text-3xl font-extrabold text-gold-400 font-poppins">5:00 AM</p>
              <p className="text-xs text-gray-300 mt-1">Daily Mangla Darshan</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-gold-400 font-poppins">100%</p>
              <p className="text-xs text-gray-300 mt-1">Verified Priests</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

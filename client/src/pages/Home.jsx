import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight, ShieldCheck, Sun, Flame, MapPin } from 'lucide-react';
import Hero from '../components/Hero';
import PanditCard from '../components/PanditCard';
import NoticeBoard from '../components/NoticeBoard';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchPandits, fetchNotices } from '../services/api';
import templePlaceholder from '../assets/images/temple-placeholder.jpg';

const Home = () => {
  const [pandits, setPandits] = useState([]);
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHomeData = async () => {
      setLoading(true);
      const [panditsData, noticesData] = await Promise.all([
        fetchPandits({ limit: 4 }),
        fetchNotices()
      ]);
      setPandits(panditsData.slice(0, 4));
      setNotices(noticesData);
      setLoading(false);
    };
    loadHomeData();
  }, []);

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Temple Introduction & Significance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-5"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-saffron-100 text-saffron-800 font-bold text-xs border border-saffron-300">
              ॥ श्री बगलामुखी पीठ • नलखेड़ा ॥
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-devanagari text-crimson-700 leading-tight">
              An Ancient Trishakti Siddhapeeth of Divine Victory
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-poppins">
              Situated on the sacred banks of the Lakhundar River in Nalkheda, Madhya Pradesh, the Maa Bagalamukhi Temple is one of the three major Bagalamukhi temples in India. The idol of Goddess Bagalamukhi here is <b>Trishakti Swayambhu</b> (self-manifested).
            </p>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Devotees and spiritual seekers perform special Bagalamukhi Anushthan and Mahayajna here for protection against enemies, victory in legal matters, and removal of life obstacles.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-gold-100/60 border border-gold-300">
                <ShieldCheck className="w-6 h-6 text-saffron-600 mb-2" />
                <h4 className="font-bold text-sm text-crimson-800">Siddha Mahayajna</h4>
                <p className="text-xs text-gray-600 mt-1">Sacred Vedic Hawan rituals conducted by expert Pandits.</p>
              </div>
              <div className="p-4 rounded-xl bg-saffron-100/60 border border-saffron-300">
                <Sun className="w-6 h-6 text-saffron-600 mb-2" />
                <h4 className="font-bold text-sm text-crimson-800">Swayambhu Idol</h4>
                <p className="text-xs text-gray-600 mt-1">Ancient self-manifested Trishakti idol since Mahabharata era.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-saffron-600 hover:text-crimson-700 font-bold text-sm group"
              >
                <span>Read Full Temple History & Religious Importance</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Temple Photo Card Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden divine-border shadow-temple p-2 bg-white">
              <img
                src={templePlaceholder}
                alt="Maa Bagalamukhi Temple Nalkheda"
                className="w-full h-96 sm:h-[420px] object-cover rounded-2xl"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-devotional-dark/85 backdrop-blur-md border border-gold-500/40 text-white">
                <div className="flex items-center gap-2 text-gold-400 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-saffron-400" />
                  <span>Lakhundar River Sangam, Nalkheda</span>
                </div>
                <p className="text-xs text-gray-300 mt-1">
                  Open for devotees 365 days a year with complete COVID and safety guidelines.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Daily Aarti & Darshan Schedule Cards */}
      <section className="bg-gradient-to-b from-saffron-50 to-devotional-cream py-14 border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-saffron-700 uppercase tracking-widest">
              Daily Temple Schedule
            </span>
            <h2 className="text-3xl font-bold font-devanagari text-crimson-700 mt-1">
              दैनिक आरती एवं दर्शन समय
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Plan your visit according to official daily Aarti and Pooja timings
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-white divine-border shadow-sm hover:shadow-temple transition-all text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-3">
                <Sun className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-crimson-800 font-devanagari">मंगल आरती</h4>
              <p className="text-xs text-saffron-700 font-semibold mt-0.5">Mangla Aarti</p>
              <p className="text-2xl font-extrabold text-gray-900 mt-2 font-poppins">5:30 AM</p>
              <p className="text-[11px] text-gray-500 mt-1">Early morning sacred offering</p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-white divine-border shadow-sm hover:shadow-temple transition-all text-center">
              <div className="w-12 h-12 rounded-full bg-saffron-100 text-saffron-600 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-crimson-800 font-devanagari">भोग आरती</h4>
              <p className="text-xs text-saffron-700 font-semibold mt-0.5">Bhog Aarti</p>
              <p className="text-2xl font-extrabold text-gray-900 mt-2 font-poppins">12:30 PM</p>
              <p className="text-[11px] text-gray-500 mt-1">Midday Prasad offering</p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-white divine-border shadow-sm hover:shadow-temple transition-all text-center">
              <div className="w-12 h-12 rounded-full bg-crimson-100 text-crimson-600 flex items-center justify-center mx-auto mb-3">
                <Flame className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-crimson-800 font-devanagari">संध्या आरती</h4>
              <p className="text-xs text-saffron-700 font-semibold mt-0.5">Sandhya Aarti</p>
              <p className="text-2xl font-extrabold text-gray-900 mt-2 font-poppins">7:30 PM</p>
              <p className="text-[11px] text-gray-500 mt-1">Grand evening lamp offering</p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-white divine-border shadow-sm hover:shadow-temple transition-all text-center">
              <div className="w-12 h-12 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-crimson-800 font-devanagari">मंदिर द्वार दर्शन</h4>
              <p className="text-xs text-saffron-700 font-semibold mt-0.5">Darshan Hours</p>
              <p className="text-xl font-extrabold text-gray-900 mt-2 font-poppins">5:00 AM - 10 PM</p>
              <p className="text-[11px] text-gray-500 mt-1">Open all days for devotees</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pandit Ji Directory Snippet & Notice Board */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Pandit Directory Snippet */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-saffron-700 uppercase tracking-widest">
                  Verified Priests
                </span>
                <h3 className="text-2xl font-bold font-devanagari text-crimson-700">
                  पूज्य पंडित एवं गुरु जन
                </h3>
              </div>
              <Link
                to="/pandits"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-saffron-100 text-saffron-800 hover:bg-saffron-500 hover:text-white font-bold text-xs transition-colors"
              >
                <span>View All Pandits</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {loading ? (
              <LoadingSpinner message="Fetching Pandit directory..." />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {pandits.map((pandit) => (
                  <PanditCard key={pandit._id} pandit={pandit} />
                ))}
              </div>
            )}

            <div className="sm:hidden pt-2 text-center">
              <Link
                to="/pandits"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-saffron-500 text-white font-bold text-sm shadow-md"
              >
                <span>Explore Full Pandit Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Notice Board Side Widget */}
          <div className="lg:col-span-5">
            <NoticeBoard notices={notices} />
          </div>
        </div>
      </section>

      {/* 5. Contact CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="saffron-gradient rounded-3xl p-8 sm:p-12 text-white shadow-saffron-glow relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-gold-400/40">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-devanagari">
              Need assistance for Anushthan or Pooja Booking?
            </h3>
            <p className="text-xs sm:text-sm text-saffron-100">
              Get authentic guidance directly from temple authorized Pandits for Bagalamukhi Sadhna, Mahayajna, and Hawan.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full bg-white text-saffron-700 hover:bg-gold-100 font-extrabold text-sm shadow-lg hover:scale-105 transition-all flex-shrink-0"
          >
            Contact Temple Management
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

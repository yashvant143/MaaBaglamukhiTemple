import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Heart, Sparkles } from 'lucide-react';
import templeLogo from '../assets/images/temple-logo.png';

const Footer = () => {
  return (
    <footer className="bg-devotional-dark text-gray-300 pt-16 pb-8 border-t-2 border-gold-500/40 relative overflow-hidden">
      {/* Golden Radial Aura background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial-gradient from-saffron-500/10 via-gold-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gold-500/20">
          {/* Column 1: Temple Info & Emblem */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={templeLogo}
                alt="Maa Bagalamukhi Emblem"
                className="w-12 h-12 object-contain bg-white rounded-full p-1 border border-gold-500"
              />
              <div>
                <h3 className="text-xl font-bold font-devanagari text-gold-400">
                  माँ बगलामुखी मंदिर
                </h3>
                <p className="text-xs font-semibold text-saffron-400">
                  Nalkheda, Madhya Pradesh
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Maa Bagalamukhi Temple in Nalkheda is an ancient Trishakti Siddhapeeth located on the banks of the Lakhundar River. Devotees visit for Bagalamukhi Anushthan, Shatru Shanti, and victory over adversities.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-gold-400 font-devanagari mb-4 border-b border-gold-500/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link to="/" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span>•</span> Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span>•</span> About Temple History
                </Link>
              </li>
              <li>
                <Link to="/pandits" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span>•</span> Pandit Ji Directory
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span>•</span> Temple Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span>•</span> Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Daily Aarti & Darshan Timings */}
          <div>
            <h4 className="text-base font-bold text-gold-400 font-devanagari mb-4 border-b border-gold-500/30 pb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-saffron-400" />
              Temple Timings
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Temple Opening:</span>
                <span className="font-semibold text-gold-300">5:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Mangla Aarti:</span>
                <span className="font-semibold text-gold-300">5:30 AM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Bhog Aarti:</span>
                <span className="font-semibold text-gold-300">12:30 PM</span>
              </li>
              <li className="flex justify-between py-1">
                <span className="text-gray-400">Sandhya Aarti:</span>
                <span className="font-semibold text-gold-300">7:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Address & Contact */}
          <div>
            <h4 className="text-base font-bold text-gold-400 font-devanagari mb-4 border-b border-gold-500/30 pb-2">
              Contact Temple
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-saffron-400 flex-shrink-0 mt-0.5" />
                <span>Nalkheda, Agar Malwa District, Madhya Pradesh - 465441</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold-400">
                  +91 98765 43210 / 43211
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                <a href="mailto:info@maabagalamukhi.org" className="hover:text-gold-400">
                  info@maabagalamukhi.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Devanagari Mantra */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Maa Bagalamukhi Temple Nalkheda. All Rights Reserved.</p>
          <div className="flex items-center gap-1 text-gold-400 font-devanagari font-bold text-sm">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>॥ जय माँ बगलामुखी पीताम्बरा सर्व बाधा निवारिणी ॥</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

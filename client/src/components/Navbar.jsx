import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';
import templeLogo from '../assets/images/temple-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Temple', path: '/about' },
    { name: 'Pandit Directory', path: '/pandits' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Divine Information Bar */}
      <div className="saffron-gradient text-white text-xs py-1.5 px-4 hidden md:block border-b border-gold-500/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold-300" />
              Nalkheda, Agar Malwa District, Madhya Pradesh
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold-300" />
              Darshan: 5:00 AM - 10:00 PM | Mangla Aarti: 5:30 AM
            </span>
          </div>
          <div className="flex items-center gap-2 text-gold-300 font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
            <span>॥ ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय ॥</span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Navbar */}
      <nav className="glass-nav shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Temple Brand Logo & Name */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full p-1 bg-gradient-to-br from-gold-500 via-saffron-500 to-crimson-700 shadow-temple group-hover:scale-105 transition-transform duration-300">
                <img
                  src={templeLogo}
                  alt="Maa Bagalamukhi Emblem"
                  className="w-full h-full object-contain bg-white rounded-full p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-devanagari text-crimson-700 tracking-wide leading-tight group-hover:text-saffron-600 transition-colors">
                  माँ बगलामुखी मंदिर
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-saffron-700 font-poppins">
                  Nalkheda, Madhya Pradesh
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-saffron-500 text-white shadow-temple font-bold scale-105'
                      : 'text-gray-700 hover:text-saffron-600 hover:bg-saffron-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Quick Call CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-saffron-500 to-crimson-700 text-white text-xs sm:text-sm font-bold shadow-temple hover:shadow-saffron-glow hover:scale-105 active:scale-95 transition-all duration-300 border border-gold-400/40"
              >
                <Phone className="w-4 h-4 fill-white text-saffron-500 animate-bounce" />
                <span>Call Pandit Ji</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-saffron-600 hover:bg-saffron-100 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-devotional-cream/95 backdrop-blur-lg border-b border-gold-500/20 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                  isActive(link.path)
                    ? 'bg-saffron-500 text-white shadow-md'
                    : 'text-gray-800 hover:bg-saffron-100 hover:text-saffron-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3">
              <a
                href="tel:+919876543210"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-saffron-500 text-white font-bold shadow-temple"
              >
                <Phone className="w-5 h-5" />
                <span>Call Pandit Ji Directly</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

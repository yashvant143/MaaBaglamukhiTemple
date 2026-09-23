import React from 'react';
import { Phone, MessageCircle, Award, CheckCircle, XCircle, Languages, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const PanditCard = ({ pandit }) => {
  const {
    name,
    photo,
    designation,
    mobile,
    experience,
    specialization = [],
    languages = [],
    availability = true,
    description
  } = pandit;

  const whatsappMessage = encodeURIComponent(
    `Jai Maa Bagalamukhi! Pranam ${name}, I am contacting you through the official temple website regarding Pooja consultation.`
  );

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="gold-card-gradient rounded-2xl overflow-hidden divine-border shadow-temple hover:shadow-saffron-glow flex flex-col justify-between h-full transition-all duration-300 group"
    >
      {/* Top Banner & Photo Header */}
      <div className="relative p-6 pb-0 flex items-start gap-4">
        {/* Pandit Image Avatar */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-gold-500 shadow-md flex-shrink-0 bg-saffron-50">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/src/assets/images/temple-placeholder.jpg';
            }}
          />
        </div>

        {/* Name & Designation */}
        <div className="flex-grow">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-saffron-100 text-saffron-800 border border-saffron-300">
              <Award className="w-3 h-3 text-saffron-600" />
              {experience} Exp.
            </span>
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                availability
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-rose-100 text-rose-800 border border-rose-300'
              }`}
            >
              {availability ? (
                <>
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  Available
                </>
              ) : (
                <>
                  <XCircle className="w-3 h-3 text-rose-600" />
                  Busy
                </>
              )}
            </span>
          </div>

          <h3 className="text-xl font-bold font-devanagari text-crimson-700 mt-2 group-hover:text-saffron-600 transition-colors">
            {name}
          </h3>
          <p className="text-xs font-semibold text-saffron-700">{designation}</p>

          <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-gold-600" />
            Nalkheda, M.P.
          </p>
        </div>
      </div>

      {/* Body: Specialization Tags & Languages */}
      <div className="p-6 pt-4 space-y-3 flex-grow">
        {description && (
          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed italic">
            "{description}"
          </p>
        )}

        {/* Specialization Tags */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
            Specialization:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {Array.isArray(specialization) ? (
              specialization.map((spec, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-gold-100 text-gold-900 border border-gold-300/50"
                >
                  {spec}
                </span>
              ))
            ) : (
              <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-gold-100 text-gold-900">
                {specialization}
              </span>
            )}
          </div>
        </div>

        {/* Languages Spoken */}
        <div className="flex items-center gap-2 pt-1 text-xs text-gray-600">
          <Languages className="w-4 h-4 text-saffron-600 flex-shrink-0" />
          <span className="font-semibold text-gray-700">Languages:</span>
          <span>{Array.isArray(languages) ? languages.join(', ') : languages}</span>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="p-4 bg-saffron-50/50 border-t border-gold-500/20 grid grid-cols-2 gap-2">
        <a
          href={`tel:${mobile}`}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-xs shadow-md transition-all active:scale-95"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Call Now</span>
        </a>
        <a
          href={`https://wa.me/91${mobile}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </motion.div>
  );
};

export default PanditCard;

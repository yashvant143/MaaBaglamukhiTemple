import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, Image as ImageIcon } from 'lucide-react';

const GalleryGrid = ({ images = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalImage, setActiveModalImage] = useState(null);

  const categories = ['All', 'Pooja', 'Temple', 'Festival', 'Events'];

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-saffron-500 text-white shadow-temple scale-105'
                : 'bg-white text-gray-700 hover:bg-saffron-100 border border-gold-300/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Cards Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredImages.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              key={item._id || idx}
              onClick={() => setActiveModalImage(item)}
              className="group relative rounded-2xl overflow-hidden divine-border bg-black aspect-video sm:aspect-square cursor-pointer shadow-temple hover:shadow-saffron-glow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/src/assets/images/temple-placeholder.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="inline-self-start px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-saffron-500 text-white mb-2 w-max">
                  {item.category}
                </span>
                <h4 className="text-white font-bold font-devanagari text-base flex items-center justify-between">
                  <span>{item.title}</span>
                  <ZoomIn className="w-5 h-5 text-gold-400" />
                </h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Image Lightbox View Modal */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveModalImage(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-4xl w-full bg-devotional-dark rounded-2xl overflow-hidden border border-gold-500/40 p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-saffron-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={activeModalImage.image}
                alt={activeModalImage.title}
                className="w-full max-h-[75vh] object-contain rounded-xl"
              />

              <div className="p-4 text-center">
                <h3 className="text-xl font-bold font-devanagari text-gold-400">
                  {activeModalImage.title}
                </h3>
                <p className="text-xs text-saffron-300 mt-1 uppercase tracking-wider font-semibold">
                  Category: {activeModalImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryGrid;

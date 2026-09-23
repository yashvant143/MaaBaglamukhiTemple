import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sun, Flame, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import templePlaceholder from '../assets/images/temple-placeholder.jpg';
import heroBanner from '../assets/images/maa-bagalamukhi-banner.jpg';

const About = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="relative py-20 bg-devotional-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBanner} alt="Temple" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-saffron-500/30 text-gold-300 text-xs font-bold mb-3 border border-gold-500/40">
            ॥ सिद्धपीठ इतिहास एवं महात्म्य ॥
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-devanagari gold-gradient-text">
            About Maa Bagalamukhi Temple
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mt-3 max-w-2xl mx-auto font-poppins">
            Explore the legendary history, spiritual significance, and sacred traditions of Nalkheda Siddhapeeth.
          </p>
        </div>
      </section>

      {/* Historical Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-5"
          >
            <span className="text-xs font-bold text-saffron-700 uppercase tracking-widest">
              Sacred History & Origins
            </span>
            <h2 className="text-3xl font-extrabold font-devanagari text-crimson-700 leading-tight">
              Established by Maharaj Yudhishthira during Mahabharata
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed font-poppins">
              According to ancient Puranic scriptures and local heritage, the sacred temple of Goddess Bagalamukhi in Nalkheda was established by Pandava King Yudhishthira under the guidance of Lord Krishna to obtain divine strength during the Mahabharata war.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed font-poppins">
              The idol here is unique across India as it is <b>Trishakti Swayambhu</b>, representing Goddess Bagalamukhi along with Goddess Lakshmi and Goddess Saraswati on either side.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-saffron-600 flex-shrink-0" />
                <span>One of only three major Bagalamukhi temples in India</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-saffron-600 flex-shrink-0" />
                <span>Self-manifested idol with yellow apparel and marigold decorations</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-saffron-600 flex-shrink-0" />
                <span>Continuous Hawan Kund burning for centuries</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl overflow-hidden divine-border shadow-temple p-2 bg-white">
              <img
                src={templePlaceholder}
                alt="Nalkheda Temple View"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Religious Significance Pillars */}
      <section className="bg-gradient-to-b from-saffron-50 to-devotional-cream py-14 border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold font-devanagari text-crimson-700">
              धार्मिक महत्व एवं विशेषताएं
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Why thousands of devotees visit Nalkheda from across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white divine-border shadow-sm hover:shadow-temple transition-all text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-saffron-100 text-saffron-600 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-devanagari text-crimson-800">
                शत्रु बाधा एवं विजय प्राप्त
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Maa Bagalamukhi is the eighth Mahavidya known for paralyzing negative energies, granting victory over adversaries, and solving court or legal hurdles.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white divine-border shadow-sm hover:shadow-temple transition-all text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center mx-auto">
                <Sun className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-devanagari text-crimson-800">
                पीताम्बरा देवी उपासना
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Devotees offer yellow clothes, yellow marigold flowers, yellow turmeric, and yellow sweets (Laddoo) during worship as yellow is the beloved color of Maa Pitambara.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white divine-border shadow-sm hover:shadow-temple transition-all text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-crimson-100 text-crimson-600 flex items-center justify-center mx-auto">
                <Flame className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-devanagari text-crimson-800">
                अखण्ड यज्ञ कुंड
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                The temple houses an Akhand Hawan Kund where continuous Vedic yajnas are conducted by experienced priests using sacred Samagri.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

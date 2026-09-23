import React from 'react';
import { Bell, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const NoticeBoard = ({ notices = [] }) => {
  return (
    <div className="bg-devotional-cream rounded-2xl divine-border p-6 shadow-temple">
      <div className="flex items-center gap-3 border-b border-gold-500/20 pb-4 mb-4">
        <div className="p-2.5 rounded-xl bg-saffron-500 text-white shadow-md">
          <Bell className="w-5 h-5 animate-bounce" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-devanagari text-crimson-700">
            सूचना पट्ट • Official Notice Board
          </h3>
          <p className="text-xs text-saffron-700 font-medium">
            Important announcements, upcoming festivals & pooja updates
          </p>
        </div>
      </div>

      <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
        {notices.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-6 italic">
            No new notices currently active. Check back soon for festival updates!
          </p>
        ) : (
          notices.map((notice, idx) => (
            <motion.div
              key={notice._id || idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 rounded-xl bg-white border border-gold-400/40 hover:border-saffron-500 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-saffron-500 to-crimson-700" />
              <div className="pl-2">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-base font-bold font-devanagari text-crimson-800">
                    {notice.title}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-saffron-100 text-saffron-800 border border-saffron-300">
                    <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                    Announcement
                  </span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed mt-1">
                  {notice.description}
                </p>
                <div className="flex items-center gap-2 mt-3 text-[11px] text-gray-500">
                  <Calendar className="w-3.5 h-3.5 text-saffron-600" />
                  <span>
                    Posted: {new Date(notice.createdAt).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;

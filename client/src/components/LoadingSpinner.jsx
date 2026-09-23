import React from 'react';
import { Sparkles } from 'lucide-react';

const LoadingSpinner = ({ message = 'Loading divine information...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-saffron-200 border-t-saffron-600 animate-spin" />
        <Sparkles className="w-6 h-6 text-gold-500 animate-pulse" />
      </div>
      <p className="mt-4 text-sm font-semibold text-saffron-800 font-devanagari animate-pulse">
        {message}
      </p>
    </div>
  );
};

export default LoadingSpinner;

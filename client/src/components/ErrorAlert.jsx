import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

const ErrorAlert = ({ message = 'Unable to fetch data.', onRetry }) => {
  return (
    <div className="bg-rose-50 border border-rose-300 rounded-2xl p-6 text-center max-w-lg mx-auto my-8 shadow-sm">
      <AlertCircle className="w-10 h-10 text-rose-600 mx-auto mb-3" />
      <h4 className="text-base font-bold text-rose-900 mb-1">Notice</h4>
      <p className="text-xs text-rose-700 mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-all shadow-sm"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
};

export default ErrorAlert;

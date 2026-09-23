import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { sendContactMessage } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const res = await sendContactMessage(formData);
    setLoading(false);

    if (res.success) {
      setStatusMessage({ type: 'success', text: res.message });
      setFormData({ name: '', email: '', mobile: '', message: '' });
    } else {
      setStatusMessage({ type: 'error', text: res.message || 'Error submitting message.' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-saffron-100 text-saffron-800 font-bold text-xs border border-saffron-300">
          ॥ संपर्क एवं स्थान • Contact & Location ॥
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-devanagari text-crimson-700">
          Reach Maa Bagalamukhi Temple
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 font-poppins">
          Devotees are welcome to contact the temple management for Pooja information, accommodation guidance, and general inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-devotional-cream rounded-2xl divine-border p-6 shadow-temple space-y-6">
            <h3 className="text-xl font-bold font-devanagari text-crimson-700 border-b border-gold-500/20 pb-3">
              Official Temple Office
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-saffron-100 text-saffron-600 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Temple Address</h4>
                  <p className="text-gray-600 mt-0.5 leading-relaxed">
                    Maa Bagalamukhi Temple Complex, Lakhundar River Sangam, Nalkheda, Agar Malwa District, Madhya Pradesh - 465441
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-gold-100 text-gold-700 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone Numbers</h4>
                  <p className="text-gray-600 mt-0.5">+91 98765 43210 / +91 98765 43211</p>
                  <p className="text-[11px] text-saffron-700 font-semibold mt-0.5">
                    Office Hours: 8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-crimson-100 text-crimson-600 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Address</h4>
                  <p className="text-gray-600 mt-0.5">info@maabagalamukhi.org</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Darshan Timings</h4>
                  <p className="text-gray-600 mt-0.5">Morning 5:00 AM to Night 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transportation / How to reach snippet */}
          <div className="p-6 rounded-2xl bg-white divine-border shadow-sm space-y-3">
            <h4 className="font-bold text-sm text-crimson-800 font-devanagari flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-saffron-600" /> How to Reach Nalkheda
            </h4>
            <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
              <li><b>Nearest Airport:</b> Devi Ahilya Bai Holkar Airport, Indore (approx. 165 km)</li>
              <li><b>Nearest Railway Station:</b> Ujjain Railway Station (approx. 100 km) or Nagda</li>
              <li><b>By Road:</b> Regular buses and taxis available from Ujjain, Indore, and Agar.</li>
            </ul>
          </div>
        </div>

        {/* Contact Form Container */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl divine-border p-8 shadow-temple space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-devanagari text-crimson-700">
                Send Message / Pooja Inquiry
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Fill out the form below and temple representatives will get back to you shortly.
              </p>
            </div>

            {statusMessage && (
              <div
                className={`p-4 rounded-xl flex items-center gap-3 text-xs font-bold ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                    : 'bg-rose-50 text-rose-800 border border-rose-300'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Devotee Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 text-xs font-medium outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 text-xs font-medium outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 text-xs font-medium outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Message / Inquiry Details *
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mention your requirements for Bagalamukhi Pooja, Anushthan, or visit planning..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 text-xs font-medium outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-saffron-500 to-crimson-700 hover:from-saffron-600 hover:to-crimson-800 text-white font-extrabold text-sm shadow-temple hover:shadow-saffron-glow transition-all active:scale-[0.99] flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Submitting Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Devotee Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

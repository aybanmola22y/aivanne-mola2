'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      // You can add success message here
    }, 2000);
  };

  return (
    <section
      id="contact"
      className={`${
        darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'
      } min-h-screen py-20 px-4 transition-colors duration-500 flex items-center justify-center`}
    >
      <div className="max-w-2xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Contact Me
          </h2>
          <p className={`text-base md:text-lg leading-relaxed max-w-lg mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have a project in mind, or just want to say hi? I&apos;d love to hear from you. Fill out the form and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`${
            darkMode 
              ? 'bg-[#1e293b] border-gray-700' 
              : 'bg-gray-50 border-gray-200'
          } rounded-2xl border shadow-xl p-8 md:p-12`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label 
                htmlFor="name" 
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                  darkMode
                    ? 'bg-[#0f172a] border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                    : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500'
                }`}
                placeholder=""
              />
            </div>

            {/* Email Field */}
            <div>
              <label 
                htmlFor="email" 
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                  darkMode
                    ? 'bg-[#0f172a] border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                    : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500'
                }`}
                placeholder=""
              />
            </div>

            {/* Message Field */}
            <div>
              <label 
                htmlFor="message" 
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 resize-none ${
                  darkMode
                    ? 'bg-[#0f172a] border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                    : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500'
                }`}
                placeholder=""
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                isSubmitting
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              } ${
                darkMode ? 'focus:ring-offset-[#1e293b]' : 'focus:ring-offset-gray-50'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
        </motion.div>
      </div>
    </section>
  );
}
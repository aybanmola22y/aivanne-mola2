'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react'; // 🌞 🌙

export default function Home() {
  const fullText = 'Aspiring Front-end Developer & Manual QA Tester';
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText(fullText.slice(0, index + 1));
      }

      if (!isDeleting && index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setIndex(0);
        return;
      }

      setIndex((prev) =>
        isDeleting ? prev - 1 : Math.min(prev + 1, fullText.length)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, fullText]);

  return (
    <main
      className={`${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      } min-h-screen flex flex-col items-center justify-center px-4 relative transition-colors duration-500`}
    >
      {/* Header */}
      <header className="absolute top-0 w-full z-50 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base"
          >
            {['ABOUT ME', 'SKILLS', 'PROJECTS', 'CONTACT'].map((text, idx) => (
              <motion.a
                key={idx}
                href={`#${text.toLowerCase().replace(' ', '')}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-3 py-1 transition duration-300 ease-in-out ${
                  darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                <span
                  className={`absolute left-0 bottom-0 w-0 h-[2px] ${
                    darkMode ? 'bg-white' : 'bg-black'
                  } transition-all duration-300 hover:w-full`}
                ></span>
                {text}
              </motion.a>
            ))}
          </motion.nav>
        </div>
      </header>

      {/* 🌗 Theme Toggle BELOW the header line */}
      <div className="absolute top-20 w-full flex justify-center py-4 z-40">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border border-gray-400 hover:scale-110 transition duration-300"
          aria-label="Toggle Theme"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-300" />
          ) : (
            <Moon className="w-5 h-5 text-blue-600" />
          )}
        </button>
      </div>

      {/* Centered Content */}
      <div className="text-center mt-32">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-sm sm:text-base font-light uppercase tracking-widest mb-2 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          John Aivanne Molato
        </motion.div>

        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[3rem] sm:text-[6rem] md:text-[8rem] font-extrabold leading-none"
        >
          PORTFOLIO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className={`mt-4 text-base sm:text-xl font-mono ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </motion.p>
      </div>

      {/* Scroll Down Symbol */}
      <motion.a
        href="#aboutme"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute bottom-8 text-3xl transform rotate-90 ${
          darkMode ? 'text-white' : 'text-black'
        }`}
      >
        &gt;
      </motion.a>
    </main>
  );
}
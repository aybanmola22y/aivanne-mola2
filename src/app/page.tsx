'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


export default function Home() {
  const fullText = 'Aspiring Front-end Developer & Manual QA Tester';
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

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
    <>
      {/* Hero Section */}
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 relative">
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
                  className="relative px-3 py-1 transition duration-300 ease-in-out text-gray-300 hover:text-white"
                >
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 hover:w-full"></span>
                  {text}
                </motion.a>
              ))}
            </motion.nav>
          </div>
        </header>

        {/* Centered Content */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-sm sm:text-base font-light uppercase tracking-widest mb-2 text-gray-300"
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
            className="mt-4 text-base sm:text-xl text-gray-300 font-mono"
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
          className="absolute bottom-8 text-white text-3xl transform rotate-90"
        >
          &gt;
        </motion.a>
      </main>

      {/* SA BABA NITO IIMPORT YUNG IBANG SECTION */}
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type AboutMeProps = {
  darkMode: boolean;
};

export default function AboutMe({ darkMode }: AboutMeProps) {
  return (
    <section
      id="aboutme"
      className={`min-h-screen w-full px-6 py-20 md:py-32 transition-colors duration-500 ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
        {/* Left - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center items-stretch"
        >
          <div className="h-full flex items-start">
            <Image
              src="/ESCANOR.png"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-3xl shadow-2xl border-4 border-gray-300 dark:border-gray-700 object-cover h-full"
            />
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col justify-between"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-2">About Me</h2>

            <p className="text-lg leading-relaxed">
              Hello! I'm <span className="font-semibold">John Aivanne Molato</span>, a passionate and aspiring
              <span className="text-yellow-400 font-semibold"> Front-end Developer</span> and
              <span className="text-blue-400 font-semibold"> Manual QA Tester</span>. I specialize in crafting beautiful, intuitive web interfaces and ensuring software quality through rigorous testing.
            </p>

            <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              As a recent graduate with a degree in Information Technology, I'm eager to start my journey in tech. I'm particularly drawn to front-end development and manual QA testing because they blend creativity, logic, and precision. I'm passionate about writing clean code, solving real-world problems, and delivering smooth user experiences.
            </p>

            <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              Outside of coding, I unwind by playing online games like Dota 2, listening to music, and spending time with friends and family. These hobbies not only recharge me but also inspire creativity in my projects.
            </p>

            <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              I'm actively looking for a junior role where I can apply and expand my skills in real-world projects. Whether it's front-end development or QA testing, I’m ready to learn, grow, and contribute to a dynamic team.
            </p>
          </div>

          {/* Download Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="/JohnAivanneMolato_CV.pdf"
              download
              className="px-6 py-2 rounded-md border border-yellow-400 text-yellow-500 dark:text-yellow-300 font-medium hover:bg-yellow-400 hover:text-black transition duration-300 text-center"
            >
              📄 Download CV
            </a>
            <a
              href="/JohnAivanneMolato_Resume.pdf"
              download
              className="px-6 py-2 rounded-md border border-blue-400 text-blue-500 dark:text-blue-300 font-medium hover:bg-blue-400 hover:text-black transition duration-300 text-center"
            >
              📝 Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

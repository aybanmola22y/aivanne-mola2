'use client';

import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTailwindcss,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMysql,
  SiPython
} from 'react-icons/si';

interface SkillsProps {
  darkMode: boolean;
}

interface TechSkill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const techSkills: TechSkill[] = [
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'React.js', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'PHP', icon: SiPhp, color: 'text-purple-500' },
  { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
  { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
  { name: 'Git', icon: SiGit, color: 'text-orange-600' },
  { name: 'MySQL Workbench', icon: SiMysql, color: 'text-blue-600' },
];

const workExperiences: WorkExperience[] = [
  {
    title: 'Part-Time Data Encoder',
    company: 'Lifesavers Drugtesting Center',
    period: '2025 - Present',
    description: 'Responsible for encoding clients personal information into the system.'
  },
  {
    title: 'Part-Time Data Encoder',
    company: 'Lifesavers Drugtesting Center',
    period: '2025 - Present',
    description: 'Responsible for encoding clients personal information into the system.'
  },
  {
    title: 'Part-Time Data Encoder',
    company: 'Lifesavers Drugtesting Center',
    period: '2025 - Present',
    description: 'Responsible for encoding clients personal information into the system.'
  },
  {
    title: 'Part-Time Data Encoder',
    company: 'Lifesavers Drugtesting Center',
    period: '2025 - Present',
    description: 'Responsible for encoding clients personal information into the system.'
  }
];

export default function Skills({ darkMode }: SkillsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section
      id="skills"
      className={`${
        darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'
      } min-h-screen py-20 px-4 transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technology & Experiences
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Tech Stack Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold mb-8"
            >
              Tech Stack
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4"
            >
              {techSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    darkMode
                      ? 'bg-[#1e293b] border-gray-700 hover:bg-[#334155]'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  } border rounded-lg p-3 sm:p-4 md:p-6 text-center transition-all duration-300 cursor-pointer group`}
                >
                  <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                    <skill.icon 
                      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${
                        darkMode ? skill.color : skill.color
                      } group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="font-medium text-xs sm:text-sm md:text-base leading-tight">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold mb-8"
            >
              Work Experience
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              {workExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                  className={`${
                    darkMode
                      ? 'bg-[#1e293b]/50'
                      : 'bg-gray-50'
                  } px-6 py-4 rounded-lg transition-all duration-300`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      darkMode ? 'bg-blue-400' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-semibold ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {experience.company}
                      </h4>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      } mb-1`}>
                        {experience.title} | {experience.period}
                      </p>
                      <p className={`text-sm leading-relaxed ${
                        darkMode ? 'text-gray-400' : 'text-gray-700'
                      }`}>
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
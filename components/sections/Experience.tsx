'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Calendar, MapPin, Rocket } from 'lucide-react';
import Image from 'next/image';

const experiences = [
  {
    role: 'Associate Software Engineer',
    company: 'Tech Solutions Inc.',
    period: '2024 - Present',
    location: 'Remote',
    description:
      'Leading development of scalable web applications using React and Node.js. Implementing CI/CD pipelines and mentoring junior developers.',
    achievements: [
      'Reduced application load time by 40% through optimization',
      'Implemented microservices architecture for core modules',
      'Led migration from JavaScript to TypeScript',
    ],
    tech: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
  },
  {
    role: 'Junior Software Developer',
    company: 'Digital Innovations',
    period: '2023 - 2024',
    location: 'Bangalore, India',
    description:
      'Developed and maintained full-stack applications for enterprise clients. Collaborated with cross-functional teams on product development.',
    achievements: [
      'Built RESTful APIs serving 100K+ daily requests',
      'Developed internal tools improving team productivity by 25%',
      'Contributed to open-source projects used by the company',
    ],
    tech: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Docker'],
  },
  {
    role: 'Software Development Intern',
    company: 'StartUp Labs',
    period: '2022 - 2023',
    location: 'Bangalore, India',
    description:
      'Assisted in developing MVP products and learned industry best practices. Gained hands-on experience with modern web technologies.',
    achievements: [
      'Developed features for 3 production applications',
      'Wrote comprehensive unit tests achieving 80% coverage',
      'Participated in code reviews and agile ceremonies',
    ],
    tech: ['React', 'JavaScript', 'Express', 'MySQL', 'Git'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 bg-slate-900/50 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Work{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </ScrollReveal>

          {/* Doodle */}
          <ScrollReveal delay={0.3} className="hidden md:block">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-40 h-32"
            >
              <Image
                src="/doodles/strolling.svg"
                alt="Strolling illustration"
                fill
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1) opacity(0.7)' }}
              />
            </motion.div>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.role + exp.company} delay={index * 0.1}>
                <motion.div
                  className="relative pl-8 border-l-2 border-slate-700 hover:border-blue-500 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900" />
                  
                  <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 p-6 hover:border-blue-500/50 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Side Doodle */}
          <ScrollReveal delay={0.4} className="hidden lg:flex flex-col justify-center items-center">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-56 h-56"
            >
              <Image
                src="/doodles/chilling.svg"
                alt="Chilling illustration"
                fill
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1) opacity(0.75)' }}
              />
            </motion.div>
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 text-center">
              <Rocket className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-medium">Always Growing</p>
              <p className="text-gray-400 text-sm mt-1">
                On a journey of continuous learning
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
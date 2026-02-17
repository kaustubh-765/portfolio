'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Code, Database, Terminal, Cloud } from 'lucide-react';
import Image from 'next/image';

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 70 },
    ],
  },
  {
    icon: Database,
    title: 'Backend Development',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Express.js', level: 82 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Git', level: 90 },
      { name: 'CI/CD', level: 72 },
      { name: 'Vercel', level: 88 },
    ],
  },
  {
    icon: Terminal,
    title: 'Tools & Technologies',
    color: 'from-green-500 to-teal-500',
    skills: [
      { name: 'REST APIs', level: 88 },
      { name: 'GraphQL', level: 70 },
      { name: 'WebSockets', level: 65 },
      { name: 'Redis', level: 60 },
      { name: 'Linux', level: 75 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-slate-900/50 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Skills &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <ScrollReveal key={category.title} delay={categoryIndex * 0.1}>
                <motion.div
                  className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300 text-sm">{skill.name}</span>
                          <span className="text-gray-500 text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Doodle Illustration */}
          <ScrollReveal delay={0.3} className="hidden lg:flex flex-col justify-center items-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-64 h-64"
            >
              <Image
                src="/doodles/meditating.svg"
                alt="Meditating illustration"
                fill
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1) opacity(0.8)' }}
              />
            </motion.div>
            <p className="text-gray-500 text-sm mt-4 text-center">
              Always learning, always growing
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Technologies I work with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'Python',
                'PostgreSQL',
                'MongoDB',
                'Docker',
                'AWS',
                'Git',
                'Tailwind',
              ].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm text-gray-300 hover:border-blue-500/50 hover:text-white transition-all cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { DoodleParticles } from '@/components/3d';
import { DoodleNavigation } from '@/components/3d/DoodleNavigation';
import { Hero, About, Skills, Projects, Experience, Contact } from '@/components/sections';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-300 ${
      isDark ? 'bg-slate-900 text-gray-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <DoodleParticles 
        particleCount={80} 
        connectionDistance={120} 
        mouseRadius={150} 
      />
      
      <DoodleNavigation items={navItems} />

      {/* Desktop Theme Toggle */}
      <div className="fixed top-6 right-6 z-50 hidden md:flex items-center gap-3">
        <ThemeToggle />
      </div>

      {/* Mobile Menu & Theme Toggle */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3 md:hidden">
        <ThemeToggle />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 backdrop-blur-sm rounded-lg border ${
            isDark 
              ? 'bg-slate-800/80 border-slate-700' 
              : 'bg-white/80 border-gray-200'
          }`}
        >
          {isMenuOpen ? <X size={24} className={isDark ? 'text-white' : 'text-slate-900'} /> : <Menu size={24} className={isDark ? 'text-white' : 'text-slate-900'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-40 backdrop-blur-md md:hidden ${
          isDark ? 'bg-slate-900/95' : 'bg-white/95'
        }`}>
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl transition-colors ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className={`relative py-8 px-6 ${
        isDark ? 'border-t border-slate-800' : 'border-t border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className={`text-xs mt-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            Built with Next.js, Three.js & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}
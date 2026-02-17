'use client';

import { useState, useEffect } from 'react';
import { DoodleParticles } from '@/components/3d';
import { DoodleNavigation } from '@/components/3d/DoodleNavigation';
import { Hero, About, Skills, Projects, Experience, Contact } from '@/components/sections';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-slate-900 text-gray-100 font-sans overflow-x-hidden">
      <DoodleParticles particleCount={80} connectionDistance={120} mouseRadius={150} />
      
      <DoodleNavigation items={navItems} />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 right-6 z-50 md:hidden p-2 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-700"
      >
        {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-gray-300 hover:text-white transition-colors"
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

      <footer className="relative py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Built with Next.js, Three.js & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}
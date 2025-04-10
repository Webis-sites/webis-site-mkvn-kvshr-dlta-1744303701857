'use client';

// components/Header.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'שירותים', href: '/services' },
  { name: 'שיעורים', href: '/classes' },
  { name: 'מנויים', href: '/membership' },
  { name: 'אודות', href: '/about' },
  { name: 'צור קשר', href: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md'
          : 'bg-white/40 backdrop-blur-sm'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <div className="relative h-12 w-12 overflow-hidden rounded-full shadow-neumorphic">
                <Image
                  src="/logo.png"
                  alt="מכון כושר דלתא"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h1 className="mr-3 text-xl font-bold text-primary">
                מכון כושר דלתא
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1 space-x-reverse">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 mx-1 rounded-lg text-gray-700 hover:text-primary transition-colors relative overflow-hidden group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 rounded-lg backdrop-blur-sm transition-opacity duration-300 border border-white/20 shadow-glassmorphic"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 w-10 h-10 rounded-full shadow-neumorphic-button flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/50 active:shadow-neumorphic-pressed transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            <span className="sr-only">{isOpen ? "סגור תפריט" : "פתח תפריט"}</span>
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span
                className={`block h-0.5 w-5 bg-primary rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-primary rounded-full transition-all duration-300 my-1 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-primary rounded-full transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </div>
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 h-full w-3/4 bg-gradient-to-br from-white/90 to-secondary/20 backdrop-blur-md z-50 shadow-lg border-l border-white/20"
                onKeyDown={handleKeyDown}
              >
                <div className="flex flex-col h-full p-6">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold text-primary">תפריט</h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-10 h-10 rounded-full shadow-neumorphic-button flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/50 active:shadow-neumorphic-pressed transition-all duration-200"
                      aria-label="סגור תפריט"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <nav className="flex-1">
                    <ul className="space-y-4">
                      {navLinks.map((link, index) => (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={link.href}
                            className="block px-4 py-3 text-lg text-gray-700 hover:text-primary rounded-lg shadow-neumorphic hover:shadow-neumorphic-hover active:shadow-neumorphic-pressed transition-all duration-200 bg-white/50"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500 text-center">
                      © 2023 מכון כושר דלתא
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;

// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9B786F',
        secondary: '#D4A5A5',
      },
      boxShadow: {
        'neumorphic': '5px 5px 10px rgba(166, 180, 200, 0.7), -5px -5px 10px rgba(255, 255, 255, 0.8)',
        'neumorphic-hover': '7px 7px 15px rgba(166, 180, 200, 0.7), -7px -7px 15px rgba(255, 255, 255, 0.8)',
        'neumorphic-pressed': 'inset 2px 2px 5px rgba(166, 180, 200, 0.7), inset -2px -2px 5px rgba(255, 255, 255, 0.8)',
        'neumorphic-button': '3px 3px 6px rgba(166, 180, 200, 0.5), -3px -3px 6px rgba(255, 255, 255, 0.8)',
        'glassmorphic': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

// globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary: #9B786F;
  --color-secondary: #D4A5A5;
  --color-background: #f0f2f5;
  --color-text: #333;
}

html {
  direction: rtl;
}

body {
  background-color: var(--color-background);
  color: var(--color-text);
}

/* For accessibility - focus styles */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.5);
}

::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-secondary);
}

/* Glassmorphism utilities */
.glass {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

/* Neumorphic utilities */
.neumorphic {
  background: var(--color-background);
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(166, 180, 200, 0.7),
              -5px -5px 10px rgba(255, 255, 255, 0.8);
}

.neumorphic-inset {
  background: var(--color-background);
  border-radius: 10px;
  box-shadow: inset 2px 2px 5px rgba(166, 180, 200, 0.7),
              inset -2px -2px 5px rgba(255, 255, 255, 0.8);
}
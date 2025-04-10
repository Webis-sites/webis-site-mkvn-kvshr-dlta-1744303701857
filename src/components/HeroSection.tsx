'use client';

// components/HeroSection.tsx
import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection: FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-100 rtl" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="רקע מכון כושר"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-end px-6 md:px-16">
        <div className="max-w-xl">
          {/* Glassmorphism Card */}
          <motion.div 
            className="rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold text-white/80">מכון כושר דלתא</h2>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              מכון כושר מוביל בישראל
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>

            {/* CTA Button - Neumorphic Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <button 
                className="
                  relative overflow-hidden
                  px-8 py-3 rounded-xl
                  bg-gradient-to-br from-primary to-secondary
                  text-white font-bold text-lg
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.25),inset_-2px_-2px_6px_rgba(0,0,0,0.3),4px_4px_12px_rgba(0,0,0,0.5)]
                  hover:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.25),inset_2px_2px_6px_rgba(0,0,0,0.3)]
                  active:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.25),inset_2px_2px_6px_rgba(0,0,0,0.3)]
                  transition-all duration-300 ease-in-out
                  focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
                "
                aria-label="קבע תור עכשיו"
              >
                <span className="relative z-10">קבע תור עכשיו</span>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements - Glassmorphism Shapes */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-md border border-white/10 shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 backdrop-blur-md border border-white/10 shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      />
    </section>
  );
};

export default HeroSection;

// app/page.tsx
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}

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
}

html {
  direction: rtl;
}

.rtl {
  direction: rtl;
  text-align: right;
}
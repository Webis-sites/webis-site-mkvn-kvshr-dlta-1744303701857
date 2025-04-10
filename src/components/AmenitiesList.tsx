// types.ts
export interface Amenity {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

// amenities-data.ts
import { Amenity } from './types';

export const amenities: Amenity[] = [
  {
    id: 'equipment',
    name: 'ציוד מתקדם',
    icon: 'dumbbell',
    description: 'מגוון רחב של ציוד כושר חדיש ומתקדם'
  },
  {
    id: 'lockers',
    name: 'חדרי הלבשה',
    icon: 'door-closed',
    description: 'חדרי הלבשה מרווחים עם ארוניות אישיות'
  },
  {
    id: 'showers',
    name: 'מקלחות',
    icon: 'shower',
    description: 'מקלחות נקיות עם מים חמים זמינים תמיד'
  },
  {
    id: 'parking',
    name: 'חניה',
    icon: 'car',
    description: 'חניה נוחה וזמינה ללא תשלום'
  },
  {
    id: 'wifi',
    name: 'אינטרנט אלחוטי',
    icon: 'wifi',
    description: 'גישה חופשית לאינטרנט מהיר בכל רחבי המתחם'
  },
  {
    id: 'towels',
    name: 'מגבות',
    icon: 'bookmark',
    description: 'שירות מגבות נקיות ללא תוספת תשלום'
  },
  {
    id: 'trainers',
    name: 'מאמנים אישיים',
    icon: 'person',
    description: 'צוות מאמנים מקצועי ומנוסה לליווי אישי'
  },
  {
    id: 'hours',
    name: 'שעות פעילות נרחבות',
    icon: 'clock',
    description: 'פתוח 24/7 לנוחות המתאמנים'
  },
];

// AmenitiesSection.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { amenities } from './amenities-data';
import { Amenity } from './types';

const AmenitiesSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref} 
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-[#f8f8f8] to-[#eaeaea] rtl"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-right mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#9B786F] mb-4">המתקנים שלנו</h2>
          <p className="text-lg text-gray-600">אנו מציעים מגוון רחב של מתקנים ושירותים כדי להפוך את האימון שלך לחוויה נעימה ויעילה</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              className="relative overflow-hidden rounded-xl"
            >
              <div className="group h-full relative overflow-hidden">
                {/* Glassmorphism card */}
                <div className="h-full backdrop-blur-md bg-white/30 border border-white/20 rounded-xl p-6 text-right
                  shadow-[0_8px_30px_rgb(0,0,0,0.05)]
                  hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)]
                  transition-all duration-300 ease-in-out
                  flex flex-col justify-between
                  before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/5 before:to-white/30 before:opacity-0 before:transition-opacity
                  before:duration-300 group-hover:before:opacity-100 before:-z-10">
                  
                  {/* Neumorphic icon container */}
                  <div className="mb-4 flex justify-end">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center
                      bg-[#f0f0f0] shadow-[inset_4px_4px_8px_rgba(255,255,255,0.9),inset_-4px_-4px_8px_rgba(0,0,0,0.05)]
                      group-hover:shadow-[inset_6px_6px_12px_rgba(255,255,255,0.9),inset_-6px_-6px_12px_rgba(0,0,0,0.08)]
                      transition-all duration-300">
                      <i className={`bi bi-${amenity.icon} text-[#9B786F] text-xl group-hover:text-[#D4A5A5] transition-colors duration-300`}></i>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#9B786F] mb-2 group-hover:text-[#D4A5A5] transition-colors duration-300">{amenity.name}</h3>
                    {amenity.description && (
                      <p className="text-gray-700">{amenity.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;

// page.tsx
import AmenitiesSection from './components/AmenitiesSection';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
      </Head>
      <main>
        {/* Other sections */}
        <AmenitiesSection />
        {/* Other sections */}
      </main>
    </>
  );
}

// globals.css (add these to your existing globals.css)
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: #9B786F;
  --secondary: #D4A5A5;
  --background: #f8f8f8;
  --card-bg: rgba(255, 255, 255, 0.3);
  --text-primary: #333333;
  --text-secondary: #666666;
}

.rtl {
  direction: rtl;
  text-align: right;
}

/* For better glassmorphism support */
@supports (backdrop-filter: blur(10px)) {
  .backdrop-blur-md {
    backdrop-filter: blur(10px);
  }
}

/* For browsers that don't support backdrop-filter */
@supports not (backdrop-filter: blur(10px)) {
  .backdrop-blur-md {
    background-color: rgba(255, 255, 255, 0.8);
  }
}
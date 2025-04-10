// types.ts
export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  bio: string;
  imageUrl: string;
  certifications: string[];
}

// TrainerProfiles.tsx
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Trainer } from './types';

interface TrainerProfilesProps {
  trainers: Trainer[];
}

const TrainerProfiles: React.FC<TrainerProfilesProps> = ({ trainers }) => {
  return (
    <section className="py-16 px-4 bg-gray-50 rtl" dir="rtl">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-right text-[#9B786F]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          הצוות המקצועי שלנו
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <TrainerCard 
              key={trainer.id} 
              trainer={trainer} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TrainerCardProps {
  trainer: Trainer;
  index: number;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ trainer, index }) => {
  return (
    <motion.div 
      className="rounded-xl overflow-hidden relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Neumorphic + Glassmorphism Card */}
      <div className="relative h-full backdrop-blur-md bg-white/70 rounded-xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] border border-white/20">
        <div className="flex flex-col items-center">
          {/* Circular Image with Neumorphic Effect */}
          <div className="w-32 h-32 rounded-full mb-4 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-1.5">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image 
                src={trainer.imageUrl} 
                alt={trainer.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-[#9B786F] mb-2 text-right w-full">{trainer.name}</h3>
          <p className="text-lg font-medium text-[#D4A5A5] mb-4 text-right w-full">{trainer.specialization}</p>
          
          <p className="text-gray-700 mb-4 text-right w-full">{trainer.bio}</p>
          
          {/* Certifications */}
          {trainer.certifications.length > 0 && (
            <div className="flex flex-wrap justify-end gap-2 w-full">
              {trainer.certifications.map((cert, i) => (
                <span 
                  key={i} 
                  className="inline-block px-3 py-1 text-sm rounded-full bg-[#9B786F]/10 text-[#9B786F] backdrop-blur-sm border border-[#9B786F]/20"
                >
                  {cert}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TrainerProfiles;

// page.tsx (example usage)
import TrainerProfiles from '../components/TrainerProfiles';
import { Trainer } from '../components/types';

const trainers: Trainer[] = [
  {
    id: '1',
    name: 'דניאל כהן',
    specialization: 'מאמן כושר אישי',
    bio: 'דניאל הוא מאמן כושר מוסמך עם ניסיון של 10 שנים בתחום האימון האישי. הוא מתמחה בבניית תוכניות אימון מותאמות אישית לכל מתאמן.',
    imageUrl: '/images/trainer1.jpg',
    certifications: ['מאמן מוסמך', 'תזונה ספורטיבית', 'שיקום פציעות']
  },
  {
    id: '2',
    name: 'מיכל לוי',
    specialization: 'מדריכת יוגה',
    bio: 'מיכל היא מדריכת יוגה מנוסה עם התמחות ביוגה ויניאסה ואשטנגה. היא מלמדת יוגה כבר 8 שנים ומאמינה בכוח של יוגה לשנות חיים.',
    imageUrl: '/images/trainer2.jpg',
    certifications: ['יוגה 200 שעות', 'מדיטציה', 'יוגה טיפולית']
  },
  {
    id: '3',
    name: 'אבי גולן',
    specialization: 'מאמן פונקציונלי',
    bio: 'אבי מתמחה באימונים פונקציונליים המשלבים תנועות טבעיות ורב-מפרקיות. הוא עוזר למתאמנים לשפר את היכולות היומיומיות שלהם.',
    imageUrl: '/images/trainer3.jpg',
    certifications: ['CrossFit Level 2', 'אימון פונקציונלי', 'TRX']
  },
  {
    id: '4',
    name: 'נועה ברק',
    specialization: 'מאמנת ריצה',
    bio: 'נועה היא רצה מקצועית לשעבר שהפכה למאמנת. היא עוזרת לרצים מתחילים ומתקדמים להשיג את היעדים שלהם ולשפר את הביצועים.',
    imageUrl: '/images/trainer4.jpg',
    certifications: ['מאמנת ריצה מוסמכת', 'פיזיולוגיה של המאמץ']
  }
];

export default function Home() {
  return (
    <main>
      {/* Other sections */}
      <TrainerProfiles trainers={trainers} />
      {/* Other sections */}
    </main>
  );
}

// globals.css additions
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: #9B786F;
  --secondary: #D4A5A5;
  --background: #f5f5f5;
  --card-bg: rgba(255, 255, 255, 0.7);
  --text-primary: #333333;
  --text-secondary: #666666;
}

.rtl {
  direction: rtl;
  text-align: right;
}

/* Add these styles for the glassmorphism and neumorphic effects */
.glass-card {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.neumorphic {
  box-shadow: 
    5px 5px 15px rgba(0, 0, 0, 0.1),
    -5px -5px 15px rgba(255, 255, 255, 0.8);
  background: var(--background);
  border-radius: 16px;
}

.neumorphic-inset {
  box-shadow: 
    inset 4px 4px 8px rgba(0, 0, 0, 0.1),
    inset -4px -4px 8px rgba(255, 255, 255, 0.8);
  background: var(--background);
  border-radius: 16px;
}
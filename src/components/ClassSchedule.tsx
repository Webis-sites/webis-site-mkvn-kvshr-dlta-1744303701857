// types.ts
export type ClassDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface FitnessClass {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  duration: string;
  instructor: string;
  difficulty: ClassDifficulty;
}

export interface DaySchedule {
  dayName: string;
  hebrewDayName: string;
  classes: FitnessClass[];
}

// schedule-data.ts
import { DaySchedule } from './types';

export const scheduleData: DaySchedule[] = [
  {
    dayName: 'Sunday',
    hebrewDayName: 'ראשון',
    classes: [
      {
        id: 'sun-1',
        name: 'יוגה בוקר',
        startTime: '07:00',
        endTime: '08:00',
        duration: '60 דקות',
        instructor: 'מיכל לוי',
        difficulty: 'beginner'
      },
      {
        id: 'sun-2',
        name: 'אימון כוח',
        startTime: '10:00',
        endTime: '11:00',
        duration: '60 דקות',
        instructor: 'דני כהן',
        difficulty: 'intermediate'
      },
      {
        id: 'sun-3',
        name: 'ספינינג',
        startTime: '18:00',
        endTime: '19:00',
        duration: '60 דקות',
        instructor: 'רונית אברהם',
        difficulty: 'advanced'
      }
    ]
  },
  {
    dayName: 'Monday',
    hebrewDayName: 'שני',
    classes: [
      {
        id: 'mon-1',
        name: 'פילאטיס',
        startTime: '08:00',
        endTime: '09:00',
        duration: '60 דקות',
        instructor: 'שירה גולן',
        difficulty: 'intermediate'
      },
      {
        id: 'mon-2',
        name: 'זומבה',
        startTime: '17:00',
        endTime: '18:00',
        duration: '60 דקות',
        instructor: 'טל שמש',
        difficulty: 'beginner'
      },
      {
        id: 'mon-3',
        name: 'אימון פונקציונלי',
        startTime: '19:30',
        endTime: '20:30',
        duration: '60 דקות',
        instructor: 'אלון דוד',
        difficulty: 'advanced'
      }
    ]
  },
  {
    dayName: 'Tuesday',
    hebrewDayName: 'שלישי',
    classes: [
      {
        id: 'tue-1',
        name: 'יוגה מתקדמים',
        startTime: '07:30',
        endTime: '08:30',
        duration: '60 דקות',
        instructor: 'מיכל לוי',
        difficulty: 'advanced'
      },
      {
        id: 'tue-2',
        name: 'TRX',
        startTime: '12:00',
        endTime: '13:00',
        duration: '60 דקות',
        instructor: 'דני כהן',
        difficulty: 'intermediate'
      },
      {
        id: 'tue-3',
        name: 'אירובי',
        startTime: '18:30',
        endTime: '19:30',
        duration: '60 דקות',
        instructor: 'רונית אברהם',
        difficulty: 'beginner'
      }
    ]
  },
  {
    dayName: 'Wednesday',
    hebrewDayName: 'רביעי',
    classes: [
      {
        id: 'wed-1',
        name: 'בוקר אנרגטי',
        startTime: '06:30',
        endTime: '07:30',
        duration: '60 דקות',
        instructor: 'אלון דוד',
        difficulty: 'intermediate'
      },
      {
        id: 'wed-2',
        name: 'פילאטיס מתקדמים',
        startTime: '10:30',
        endTime: '11:30',
        duration: '60 דקות',
        instructor: 'שירה גולן',
        difficulty: 'advanced'
      },
      {
        id: 'wed-3',
        name: 'ספינינג ערב',
        startTime: '19:00',
        endTime: '20:00',
        duration: '60 דקות',
        instructor: 'טל שמש',
        difficulty: 'intermediate'
      }
    ]
  },
  {
    dayName: 'Thursday',
    hebrewDayName: 'חמישי',
    classes: [
      {
        id: 'thu-1',
        name: 'אימון בוקר',
        startTime: '08:00',
        endTime: '09:00',
        duration: '60 דקות',
        instructor: 'דני כהן',
        difficulty: 'beginner'
      },
      {
        id: 'thu-2',
        name: 'HIIT',
        startTime: '17:00',
        endTime: '17:45',
        duration: '45 דקות',
        instructor: 'אלון דוד',
        difficulty: 'advanced'
      },
      {
        id: 'thu-3',
        name: 'יוגה ערב',
        startTime: '20:00',
        endTime: '21:00',
        duration: '60 דקות',
        instructor: 'מיכל לוי',
        difficulty: 'beginner'
      }
    ]
  },
  {
    dayName: 'Friday',
    hebrewDayName: 'שישי',
    classes: [
      {
        id: 'fri-1',
        name: 'אימון סופ"ש',
        startTime: '08:30',
        endTime: '09:30',
        duration: '60 דקות',
        instructor: 'רונית אברהם',
        difficulty: 'intermediate'
      },
      {
        id: 'fri-2',
        name: 'זומבה',
        startTime: '10:00',
        endTime: '11:00',
        duration: '60 דקות',
        instructor: 'טל שמש',
        difficulty: 'beginner'
      }
    ]
  }
];

// components/ClassSchedule.tsx
'use client';

import { useState } from 'react';
import { scheduleData } from '../schedule-data';
import { ClassDifficulty, FitnessClass } from '../types';

const difficultyLabels: Record<ClassDifficulty, string> = {
  beginner: 'מתחילים',
  intermediate: 'בינוני',
  advanced: 'מתקדם'
};

const difficultyColors: Record<ClassDifficulty, string> = {
  beginner: 'bg-green-200 text-green-800',
  intermediate: 'bg-blue-200 text-blue-800',
  advanced: 'bg-red-200 text-red-800'
};

export default function ClassSchedule() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className="rtl w-full max-w-7xl mx-auto p-4 md:p-6 font-sans" dir="rtl">
      <h2 className="text-3xl font-bold text-right mb-6 text-[#9B786F]">לוח זמנים שבועי</h2>
      
      {/* Mobile Day Tabs */}
      <div className="md:hidden mb-6">
        <div className="flex overflow-x-auto pb-2 gap-2">
          {scheduleData.map((day, index) => (
            <button
              key={day.dayName}
              onClick={() => setActiveDay(index)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                activeDay === index 
                  ? 'bg-[#9B786F] text-white shadow-[inset_2px_2px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_5px_rgba(0,0,0,0.2)]' 
                  : 'bg-white/80 backdrop-blur-sm border border-[#D4A5A5]/30 shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.5)]'
              }`}
            >
              {day.hebrewDayName}
            </button>
          ))}
        </div>
        
        <div className="mt-4">
          <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.7)] border border-white/50">
            <h3 className="text-xl font-bold mb-4 text-[#9B786F]">{scheduleData[activeDay].hebrewDayName}</h3>
            <div className="space-y-4">
              {scheduleData[activeDay].classes.map((fitnessClass) => (
                <ClassCard key={fitnessClass.id} fitnessClass={fitnessClass} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop Schedule Grid */}
      <div className="hidden md:block">
        <div className="grid grid-cols-6 gap-4">
          {scheduleData.map((day) => (
            <div key={day.dayName} className="col-span-1">
              <div className="bg-[#9B786F] text-white p-3 rounded-t-lg text-center font-bold shadow-[inset_2px_2px_5px_rgba(255,255,255,0.2),inset_-2px_-2px_5px_rgba(0,0,0,0.2)]">
                {day.hebrewDayName}
              </div>
              <div className="bg-white/60 backdrop-blur-md rounded-b-lg p-3 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.7)] border border-white/50 h-full">
                <div className="space-y-4">
                  {day.classes.map((fitnessClass) => (
                    <ClassCard key={fitnessClass.id} fitnessClass={fitnessClass} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClassCard({ fitnessClass }: { fitnessClass: FitnessClass }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 transition-all duration-300 
                    shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] 
                    border border-white/50
                    hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)]
                    hover:bg-white/90 hover:translate-y-[-2px]">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-[#9B786F]">{fitnessClass.name}</h4>
        <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[fitnessClass.difficulty]}`}>
          {difficultyLabels[fitnessClass.difficulty]}
        </span>
      </div>
      <div className="text-sm text-gray-700 space-y-1">
        <div className="flex justify-between">
          <span>שעה:</span>
          <span className="font-medium">{fitnessClass.startTime} - {fitnessClass.endTime}</span>
        </div>
        <div className="flex justify-between">
          <span>משך:</span>
          <span>{fitnessClass.duration}</span>
        </div>
        <div className="flex justify-between">
          <span>מדריך:</span>
          <span>{fitnessClass.instructor}</span>
        </div>
      </div>
    </div>
  );
}

// app/globals.css
// Add these styles to your globals.css file
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary-color: #9B786F;
  --secondary-color: #D4A5A5;
  --primary-light: rgba(155, 120, 111, 0.1);
  --secondary-light: rgba(212, 165, 165, 0.1);
}

body {
  background: linear-gradient(135deg, var(--primary-light), var(--secondary-light));
  min-height: 100vh;
  direction: rtl;
}

/* For RTL support */
.rtl {
  direction: rtl;
  text-align: right;
}

/* app/page.tsx */
import ClassSchedule from '../components/ClassSchedule';

export default function Home() {
  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#9B786F]">מרכז הכושר שלנו</h1>
        <ClassSchedule />
      </div>
    </main>
  );
}

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
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
}
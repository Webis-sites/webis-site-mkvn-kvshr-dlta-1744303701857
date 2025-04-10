// types.ts
export interface SuccessStory {
  id: string;
  name: string;
  age: number;
  beforeImage: string;
  afterImage: string;
  goalsAchieved: string;
  quote: string;
}

// data/successStories.ts
import { SuccessStory } from '../types';

export const successStories: SuccessStory[] = [
  {
    id: '1',
    name: 'דוד כהן',
    age: 32,
    beforeImage: '/images/success-stories/david-before.jpg',
    afterImage: '/images/success-stories/david-after.jpg',
    goalsAchieved: 'ירידה של 15 ק״ג והגדלת מסת השריר',
    quote: 'המאמנים במכון הזה שינו את חיי. הגעתי עם ביטחון עצמי נמוך ועכשיו אני מרגיש חזק יותר מתמיד!'
  },
  {
    id: '2',
    name: 'מיכל לוי',
    age: 28,
    beforeImage: '/images/success-stories/michal-before.jpg',
    afterImage: '/images/success-stories/michal-after.jpg',
    goalsAchieved: 'חיזוק הגוף והשגת כושר גופני מעולה',
    quote: 'אחרי לידה, חשבתי שלא אחזור לעצמי. המכון נתן לי את הכלים והתמיכה להשיג את המטרות שלי.'
  },
  {
    id: '3',
    name: 'יוסי אברהם',
    age: 45,
    beforeImage: '/images/success-stories/yossi-before.jpg',
    afterImage: '/images/success-stories/yossi-after.jpg',
    goalsAchieved: 'שיפור בריאותי משמעותי וירידה בלחץ הדם',
    quote: 'בגיל 45 חשבתי שמאוחר מדי לשינוי. טעיתי! הרגשתי שנולדתי מחדש אחרי 6 חודשים של אימונים.'
  },
  {
    id: '4',
    name: 'רונית שמעון',
    age: 35,
    beforeImage: '/images/success-stories/ronit-before.jpg',
    afterImage: '/images/success-stories/ronit-after.jpg',
    goalsAchieved: 'חיטוב הגוף והגברת הביטחון העצמי',
    quote: 'האווירה התומכת והמקצועית במכון עזרה לי להתמיד ולהגיע להישגים שלא חלמתי עליהם.'
  }
];

// components/SuccessStories.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { successStories } from '../data/successStories';
import { SuccessStory } from '../types';

const SuccessStoryCard = ({ story }: { story: SuccessStory }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="rtl relative flex flex-col rounded-2xl overflow-hidden h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {/* Glassmorphism card */}
      <div className="relative h-full backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        {/* Neumorphic inner container */}
        <div className="p-6 h-full flex flex-col bg-gray-100 rounded-2xl shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),_-5px_-5px_10px_rgba(255,255,255,0.8)]">
          <div className="text-right mb-4">
            <h3 className="text-xl font-bold text-[#9B786F]">{story.name}, גיל {story.age}</h3>
            <p className="text-gray-700 font-medium">{story.goalsAchieved}</p>
          </div>
          
          <div className="relative flex-1 flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1 min-h-[200px] rounded-xl overflow-hidden shadow-[5px_5px_10px_rgba(0,0,0,0.1),_-5px_-5px_10px_rgba(255,255,255,0.8)]">
              <Image 
                src={story.beforeImage} 
                alt={`תמונת לפני של ${story.name}`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-[#9B786F]/80 text-white px-3 py-1 text-sm rounded-tl-lg">
                לפני
              </div>
            </div>
            
            <div className="relative flex-1 min-h-[200px] rounded-xl overflow-hidden shadow-[5px_5px_10px_rgba(0,0,0,0.1),_-5px_-5px_10px_rgba(255,255,255,0.8)]">
              <Image 
                src={story.afterImage} 
                alt={`תמונת אחרי של ${story.name}`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-[#D4A5A5]/80 text-white px-3 py-1 text-sm rounded-tl-lg">
                אחרי
              </div>
            </div>
          </div>
          
          <div className="mt-auto">
            <blockquote className="text-right italic text-gray-700 border-r-4 border-[#D4A5A5] pr-4 py-2">
              "{story.quote}"
            </blockquote>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === successStories.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? successStories.length - 1 : prev - 1));
  };
  
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };
  
  return (
    <section ref={ref} className="py-16 px-4 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden" dir="rtl">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#9B786F] mb-4">סיפורי הצלחה</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            הכירו את החברים שלנו שהשיגו תוצאות מדהימות בזכות המחויבות שלהם והליווי המקצועי שלנו
          </p>
        </motion.div>
        
        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-2 gap-8 mb-12">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.5,
                    delay: index * 0.2
                  } 
                }
              }}
            >
              <SuccessStoryCard story={story} />
            </motion.div>
          ))}
        </div>
        
        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${activeIndex * 100}%)` }}
            >
              {successStories.map((story) => (
                <div key={story.id} className="min-w-full px-4">
                  <SuccessStoryCard story={story} />
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center items-center mt-8 gap-2">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 text-[#9B786F] shadow-[5px_5px_10px_rgba(0,0,0,0.1),_-5px_-5px_10px_rgba(255,255,255,0.8)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),_inset_-5px_-5px_10px_rgba(255,255,255,0.8)] transition-all"
              aria-label="הסיפור הקודם"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="flex gap-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index 
                      ? 'bg-[#9B786F] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2)]' 
                      : 'bg-[#D4A5A5] shadow-[2px_2px_5px_rgba(0,0,0,0.1),_-2px_-2px_5px_rgba(255,255,255,0.5)]'
                  }`}
                  aria-label={`עבור לסיפור ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 text-[#9B786F] shadow-[5px_5px_10px_rgba(0,0,0,0.1),_-5px_-5px_10px_rgba(255,255,255,0.8)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),_inset_-5px_-5px_10px_rgba(255,255,255,0.8)] transition-all"
              aria-label="הסיפור הבא"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>
        
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 0.5,
                delay: 0.6
              } 
            }
          }}
          className="text-center mt-12"
        >
          <a 
            href="#join-now" 
            className="inline-block px-8 py-4 text-lg font-bold text-white rounded-xl bg-gradient-to-r from-[#9B786F] to-[#D4A5A5] shadow-[5px_5px_10px_rgba(0,0,0,0.1),_-5px_-5px_10px_rgba(255,255,255,0.8)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),_inset_-5px_-5px_10px_rgba(255,255,255,0.8)] transition-all backdrop-blur-sm border border-white/30"
          >
            הצטרפו עכשיו והפכו לסיפור ההצלחה הבא
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;

// app/page.tsx
import SuccessStories from '../components/SuccessStories';

export default function Home() {
  return (
    <main>
      {/* Other sections */}
      <SuccessStories />
      {/* Other sections */}
    </main>
  );
}
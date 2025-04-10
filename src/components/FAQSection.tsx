'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronDown } from 'react-icons/fi';

// Define the FAQ item type
type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

// Sample FAQ data in Hebrew
const faqData: FAQItem[] = [
  {
    id: 1,
    question: "מהם שעות הפעילות של המכון?",
    answer: "המכון פתוח בימים א'-ה' בין השעות 06:00-23:00, בימי שישי בין 06:00-19:00, ובשבת בין 08:00-18:00. שעות הפעילות עשויות להשתנות בחגים."
  },
  {
    id: 2,
    question: "אילו סוגי מנויים אתם מציעים?",
    answer: "אנו מציעים מגוון מנויים: מנוי חודשי, מנוי שנתי, מנוי זוגי, ומנוי משפחתי. כל המנויים כוללים גישה מלאה למתקני המכון וחלק מהשיעורים הקבוצתיים."
  },
  {
    id: 3,
    question: "האם ניתן לבטל מנוי?",
    answer: "כן, ניתן לבטל מנוי בהתאם לתנאי הביטול המפורטים בחוזה. בדרך כלל נדרשת הודעה מוקדמת של 30 יום. נא לפנות לצוות שירות הלקוחות לקבלת פרטים נוספים."
  },
  {
    id: 4,
    question: "אילו שיעורים קבוצתיים מוצעים במכון?",
    answer: "אנו מציעים מגוון רחב של שיעורים קבוצתיים כולל יוגה, פילאטיס, ספינינג, זומבה, אימוני כוח, ועוד. לוח השיעורים המלא זמין באפליקציה ובאתר שלנו."
  },
  {
    id: 5,
    question: "האם יש אפשרות לאימון אישי?",
    answer: "בהחלט! צוות המאמנים המקצועי שלנו מציע אימונים אישיים המותאמים לצרכים ולמטרות האישיות שלך. ניתן לרכוש חבילות של אימונים אישיים בקבלה או באפליקציה."
  },
  {
    id: 6,
    question: "האם יש חניה זמינה?",
    answer: "כן, לחברי המכון יש גישה לחניון תת-קרקעי ללא תשלום למשך שעתיים. יש להציג את כרטיס החבר בכניסה לחניון."
  },
  {
    id: 7,
    question: "מה כולל הציוד במכון?",
    answer: "המכון מצויד במיטב הציוד החדיש, כולל מכשירי כוח, מכשירים קרדיו, משקולות חופשיות, ואזורים ייעודיים לאימוני פונקציונליים, מתיחות ויוגה."
  }
];

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="rtl min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 md:p-10 font-sans">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-right text-[#9B786F]">שאלות נפוצות</h2>
        
        <div className="space-y-4">
          {faqData.map((item) => (
            <div 
              key={item.id}
              className="rounded-xl overflow-hidden"
            >
              <motion.div
                className={`
                  relative 
                  backdrop-blur-md 
                  bg-white/70 
                  border border-white/20
                  shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)]
                  hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.05),inset_-5px_-5px_10px_rgba(255,255,255,0.8)]
                  transition-all duration-300
                  ${openItem === item.id ? 'bg-gradient-to-r from-[#D4A5A5]/30 to-[#9B786F]/30' : ''}
                `}
              >
                <button
                  className="w-full p-5 text-right flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#9B786F] focus:ring-opacity-50"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openItem === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <motion.div
                    animate={{ rotate: openItem === item.id ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#9B786F]"
                  >
                    {openItem === item.id ? <FiChevronDown size={24} /> : <FiChevronLeft size={24} />}
                  </motion.div>
                  <span className="font-semibold text-lg text-[#9B786F]">{item.question}</span>
                </button>
                
                <AnimatePresence>
                  {openItem === item.id && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-right border-t border-[#D4A5A5]/30">
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaAppleAlt, FaHeartbeat, FaRunning, FaYoga } from 'react-icons/fa';

// Define the service type
interface Service {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServicesSection = () => {
  // Services data with Hebrew text
  const services: Service[] = [
    {
      id: 1,
      icon: FaDumbbell,
      title: "אימון אישי",
      description: "תוכנית אימונים מותאמת אישית לצרכים ולמטרות שלך עם מאמן מקצועי"
    },
    {
      id: 2,
      icon: FaUsers,
      title: "אימונים קבוצתיים",
      description: "מגוון שיעורים קבוצתיים מאתגרים ומהנים בהדרכת מדריכים מוסמכים"
    },
    {
      id: 3,
      icon: FaAppleAlt,
      title: "ייעוץ תזונה",
      description: "תוכניות תזונה מותאמות אישית לשיפור הביצועים והשגת יעדי הכושר שלך"
    },
    {
      id: 4,
      icon: FaHeartbeat,
      title: "בדיקות כושר",
      description: "הערכת כושר מקיפה לקביעת רמת הכושר הנוכחית שלך וקביעת יעדים ריאליסטיים"
    },
    {
      id: 5,
      icon: FaRunning,
      title: "אימוני סיבולת",
      description: "תוכניות מיוחדות לשיפור הסיבולת והכושר האירובי שלך"
    },
    {
      id: 6,
      icon: FaYoga,
      title: "יוגה ומדיטציה",
      description: "שיעורי יוגה ומדיטציה לשיפור הגמישות, האיזון והרוגע הנפשי"
    }
  ];

  // State for checking if component is in viewport
  const [isInView, setIsInView] = useState(false);

  // Set isInView to true after component mounts for animation
  useEffect(() => {
    setIsInView(true);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-100 to-gray-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#9B786F]"
          >
            השירותים שלנו
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            אנו מציעים מגוון רחב של שירותי כושר מקצועיים כדי לעזור לך להשיג את יעדי הכושר שלך
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              {/* Neumorphic + Glassmorphism Card */}
              <div className="h-full p-8 rounded-2xl bg-white/80 backdrop-blur-md 
                border border-white/20 shadow-[8px_8px_16px_rgba(174,174,192,0.4),-8px_-8px_16px_rgba(255,255,255,0.8)]
                hover:shadow-[inset_8px_8px_16px_rgba(174,174,192,0.2),inset_-8px_-8px_16px_rgba(255,255,255,0.6)]
                transition-all duration-300 flex flex-col items-center text-center
                group-hover:bg-gradient-to-br group-hover:from-white/90 group-hover:to-white/70"
              >
                {/* Colorful circle behind icon */}
                <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center
                  bg-gradient-to-br from-[#D4A5A5] to-[#9B786F]
                  shadow-[4px_4px_10px_rgba(155,120,111,0.3),-4px_-4px_10px_rgba(255,255,255,0.8)]
                  group-hover:shadow-[inset_4px_4px_8px_rgba(155,120,111,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.6)]
                  transition-all duration-300"
                >
                  <service.icon className="text-white text-3xl" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-[#9B786F] group-hover:text-[#8A675E] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Glassmorphic hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                  bg-gradient-to-br from-[#D4A5A5]/10 to-[#9B786F]/10 backdrop-blur-[2px]
                  border border-white/30 transition-opacity duration-300 pointer-events-none"
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
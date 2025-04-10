'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CTABannerProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  backgroundImageUrl?: string;
}

const CTABanner: React.FC<CTABannerProps> = ({
  headline = "הצטרף למהפכת הכושר שלנו",
  description = "אימונים מותאמים אישית, מאמנים מקצועיים, וציוד מתקדם. האימון הראשון עלינו!",
  buttonText = "קבע תור עכשיו",
  backgroundImageUrl = "/gym-background.jpg"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      className="relative w-full overflow-hidden rounded-2xl my-8 rtl"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      dir="rtl"
    >
      {/* Glassmorphism container */}
      <div className="relative z-10 backdrop-blur-md bg-white/30 border border-white/20 shadow-lg p-6 md:p-8 rounded-2xl">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#9B786F]/80 to-[#D4A5A5]/80 rounded-2xl -z-10"></div>
        
        {/* Background image with overlay */}
        {backgroundImageUrl && (
          <div className="absolute inset-0 -z-20">
            <Image
              src={backgroundImageUrl}
              alt="Gym background"
              fill
              sizes="100vw"
              className="object-cover rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
          </div>
        )}

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-right">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {headline}
            </h2>
            <p className="text-white/90 text-sm md:text-base">
              {description}
            </p>
          </div>

          {/* Neumorphic button */}
          <motion.button
            className="w-full md:w-auto px-8 py-3 rounded-xl text-white font-bold bg-gradient-to-r from-[#9B786F] to-[#D4A5A5] shadow-[6px_6px_12px_rgba(0,0,0,0.2),-4px_-4px_12px_rgba(255,255,255,0.1)] border border-white/10 transition-all"
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "8px 8px 16px rgba(0,0,0,0.25), -6px -6px 16px rgba(255,255,255,0.15)" 
            }}
            whileTap={{ 
              scale: 0.98, 
              boxShadow: "4px 4px 8px rgba(0,0,0,0.15), -2px -2px 8px rgba(255,255,255,0.05)" 
            }}
            aria-label={buttonText}
          >
            {buttonText}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CTABanner;
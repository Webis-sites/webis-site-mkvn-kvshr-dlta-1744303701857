// types.ts
export interface SpecialOffer {
  id: string;
  headline: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  ctaText: string;
  ctaLink: string;
  expiryDate?: Date;
  savingsPercentage: number;
  badge?: string;
}

// SpecialOffers.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { SpecialOffer } from './types';

interface CountdownTimerProps {
  expiryDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ expiryDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = expiryDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [expiryDate]);

  return (
    <div className="flex justify-end gap-2 mt-2 text-sm font-bold" dir="ltr">
      <div className="flex flex-col items-center">
        <div className="bg-white/20 backdrop-blur-md rounded-lg px-2 py-1 min-w-[40px] text-center">
          {timeLeft.days}
        </div>
        <span className="text-xs">ימים</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/20 backdrop-blur-md rounded-lg px-2 py-1 min-w-[40px] text-center">
          {timeLeft.hours}
        </div>
        <span className="text-xs">שעות</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/20 backdrop-blur-md rounded-lg px-2 py-1 min-w-[40px] text-center">
          {timeLeft.minutes}
        </div>
        <span className="text-xs">דקות</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/20 backdrop-blur-md rounded-lg px-2 py-1 min-w-[40px] text-center">
          {timeLeft.seconds}
        </div>
        <span className="text-xs">שניות</span>
      </div>
    </div>
  );
};

interface OfferCardProps {
  offer: SpecialOffer;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f8f8f8] to-[#e8e8e8] p-6 shadow-[8px_8px_16px_rgba(174,174,192,0.4),-8px_-8px_16px_rgba(255,255,255,0.65)] transition-all hover:shadow-[12px_12px_20px_rgba(174,174,192,0.5),-12px_-12px_20px_rgba(255,255,255,0.8)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#9B786F]/10 to-[#D4A5A5]/20 backdrop-filter backdrop-blur-sm border border-white/20 z-0"></div>
      
      {offer.badge && (
        <div className="absolute -left-12 top-6 bg-[#9B786F] text-white py-1 px-12 transform rotate-[-45deg] shadow-md z-10">
          {offer.badge}
        </div>
      )}
      
      <div className="relative z-10 text-right">
        <h3 className="text-2xl font-bold text-[#9B786F] mb-2">{offer.headline}</h3>
        <p className="text-gray-700 mb-4">{offer.description}</p>
        
        <div className="flex justify-end items-center gap-3 mb-4">
          <span className="text-2xl font-bold text-[#9B786F]">₪{offer.discountedPrice}</span>
          <span className="text-lg line-through text-gray-500">₪{offer.originalPrice}</span>
          <span className="bg-[#D4A5A5] text-white px-2 py-1 rounded-full text-sm font-bold">
            {offer.savingsPercentage}% הנחה
          </span>
        </div>
        
        {offer.expiryDate && <CountdownTimer expiryDate={offer.expiryDate} />}
        
        <button 
          className="mt-4 w-full bg-gradient-to-r from-[#9B786F] to-[#D4A5A5] text-white py-3 px-6 rounded-xl font-bold 
                    shadow-[4px_4px_8px_rgba(155,120,111,0.3),-2px_-2px_6px_rgba(255,255,255,0.8)] 
                    hover:shadow-[6px_6px_10px_rgba(155,120,111,0.4),-3px_-3px_8px_rgba(255,255,255,0.9)]
                    active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-2px_-2px_8px_rgba(255,255,255,0.3)]
                    transition-all duration-300 backdrop-filter backdrop-blur-sm border border-white/20"
        >
          {offer.ctaText}
        </button>
      </div>
    </div>
  );
};

interface SpecialOffersProps {
  offers: SpecialOffer[];
  title?: string;
}

const SpecialOffers: React.FC<SpecialOffersProps> = ({ 
  offers,
  title = "מבצעים מיוחדים"
}) => {
  return (
    <section className="py-12 px-4 md:px-8 bg-gradient-to-br from-gray-100 to-gray-200" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-right mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#9B786F]">{title}</h2>
          <div className="h-1 w-24 bg-[#D4A5A5] mt-2 mr-0 ml-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;

// page.tsx - Example usage
import SpecialOffers from '@/components/SpecialOffers';
import { SpecialOffer } from '@/components/types';

export default function Home() {
  // Sample data - in a real app, this would come from an API or CMS
  const specialOffers: SpecialOffer[] = [
    {
      id: '1',
      headline: 'מנוי שנתי במחיר מיוחד',
      description: 'הצטרפו עכשיו למנוי שנתי מלא וקבלו גישה לכל המתקנים והשיעורים שלנו ללא הגבלה.',
      originalPrice: 2400,
      discountedPrice: 1800,
      savingsPercentage: 25,
      ctaText: 'הצטרפו עכשיו',
      ctaLink: '/signup',
      expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      badge: 'מוגבל בזמן'
    },
    {
      id: '2',
      headline: 'מנוי זוגי - חסכו 30%',
      description: 'הירשמו יחד עם בן/בת זוג ותיהנו מהנחה משמעותית על שני מנויים. כולל כל השירותים.',
      originalPrice: 4000,
      discountedPrice: 2800,
      savingsPercentage: 30,
      ctaText: 'קבלו הצעה',
      ctaLink: '/couples',
      badge: 'הכי משתלם'
    },
    {
      id: '3',
      headline: 'חבילת אימונים אישיים',
      description: '10 אימונים אישיים עם המאמנים המובילים שלנו. התאמה אישית לצרכים ולמטרות שלכם.',
      originalPrice: 1500,
      discountedPrice: 1200,
      savingsPercentage: 20,
      ctaText: 'תיאום אימון',
      ctaLink: '/personal-training',
      expiryDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    }
  ];

  return (
    <main>
      <SpecialOffers offers={specialOffers} />
      {/* Other page content */}
    </main>
  );
}

// globals.css - Add these to your existing Tailwind CSS setup
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: #9B786F;
  --secondary: #D4A5A5;
  --background: #f5f5f5;
  --text: #333333;
}

body {
  background-color: var(--background);
  color: var(--text);
}
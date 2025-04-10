// types.ts
export interface PlanFeature {
  id: string;
  text: string;
}

export interface MembershipPlan {
  id: string;
  title: string;
  price: number;
  duration: string;
  features: PlanFeature[];
  isRecommended: boolean;
  ctaText: string;
}

// data/plans.ts
import { MembershipPlan } from '../types';

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'basic',
    title: 'בסיסי',
    price: 99,
    duration: 'לחודש',
    features: [
      { id: 'basic-1', text: 'גישה לאולם הכושר בשעות מוגבלות' },
      { id: 'basic-2', text: 'שימוש במכשירי כושר בסיסיים' },
      { id: 'basic-3', text: 'אימון היכרות אחד' },
      { id: 'basic-4', text: 'גישה לאפליקציית המועדון' },
    ],
    isRecommended: false,
    ctaText: 'הצטרף עכשיו',
  },
  {
    id: 'standard',
    title: 'סטנדרט',
    price: 149,
    duration: 'לחודש',
    features: [
      { id: 'standard-1', text: 'גישה מלאה לאולם הכושר 24/7' },
      { id: 'standard-2', text: 'גישה לכל המכשירים' },
      { id: 'standard-3', text: '2 אימונים אישיים בחודש' },
      { id: 'standard-4', text: 'תוכנית אימונים מותאמת אישית' },
      { id: 'standard-5', text: 'גישה לשיעורי קבוצה' },
    ],
    isRecommended: true,
    ctaText: 'הצטרף עכשיו',
  },
  {
    id: 'premium',
    title: 'פרימיום',
    price: 249,
    duration: 'לחודש',
    features: [
      { id: 'premium-1', text: 'כל היתרונות של חבילת הסטנדרט' },
      { id: 'premium-2', text: '4 אימונים אישיים בחודש' },
      { id: 'premium-3', text: 'ייעוץ תזונה אישי' },
      { id: 'premium-4', text: 'גישה לאזור הספא והסאונה' },
      { id: 'premium-5', text: 'חניה חינם' },
      { id: 'premium-6', text: 'הנחות בחנות המזון הבריא' },
    ],
    isRecommended: false,
    ctaText: 'הצטרף עכשיו',
  },
];

// components/MembershipPlans.tsx
'use client';

import { useState } from 'react';
import { MembershipPlan } from '../types';
import { membershipPlans } from '../data/plans';

export default function MembershipPlans() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-100 to-gray-200 rtl" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">תוכניות חברות</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            בחר את תוכנית החברות המתאימה לך ביותר והתחל את מסע הכושר שלך עוד היום
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {membershipPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 ease-in-out
                ${
                  hoveredPlan === plan.id
                    ? 'transform -translate-y-2'
                    : ''
                }
                ${
                  plan.isRecommended
                    ? 'bg-gradient-to-br from-[#9B786F]/90 to-[#D4A5A5]/90 backdrop-blur-md border border-white/20'
                    : 'bg-white/80 backdrop-blur-md border border-white/10'
                }
              `}
              style={{
                boxShadow: plan.isRecommended
                  ? '0 10px 30px rgba(155, 120, 111, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.4)'
                  : hoveredPlan === plan.id
                  ? '0 15px 30px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.4)'
                  : '0 8px 20px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
              }}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.isRecommended && (
                <div className="absolute top-0 left-0 bg-[#9B786F] text-white py-1 px-4 rounded-br-lg text-sm font-medium">
                  מומלץ
                </div>
              )}
              
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.isRecommended ? 'text-white' : 'text-gray-800'}`}>
                  {plan.title}
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className={`text-4xl font-bold ${plan.isRecommended ? 'text-white' : 'text-[#9B786F]'}`}>
                    ₪{plan.price}
                  </span>
                  <span className={`mr-2 ${plan.isRecommended ? 'text-white/80' : 'text-gray-500'}`}>
                    {plan.duration}
                  </span>
                </div>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li 
                      key={feature.id} 
                      className={`flex items-center ${plan.isRecommended ? 'text-white/90' : 'text-gray-700'}`}
                    >
                      <svg 
                        className={`h-5 w-5 ml-2 flex-shrink-0 ${plan.isRecommended ? 'text-white' : 'text-[#D4A5A5]'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      {feature.text}
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 text-center
                    ${
                      plan.isRecommended
                        ? 'bg-white text-[#9B786F] hover:bg-gray-100'
                        : 'bg-gradient-to-r from-[#9B786F] to-[#D4A5A5] text-white hover:opacity-90'
                    }
                  `}
                  style={{
                    boxShadow: hoveredPlan === plan.id
                      ? plan.isRecommended
                        ? '0 4px 12px rgba(255, 255, 255, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.4)'
                        : '0 4px 12px rgba(155, 120, 111, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.4)'
                      : '0 2px 6px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
                  }}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// app/page.tsx
import MembershipPlans from '../components/MembershipPlans';

export default function Home() {
  return (
    <main>
      <MembershipPlans />
      {/* Other sections */}
    </main>
  );
}

// app/globals.css
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

.rtl {
  direction: rtl;
  text-align: right;
}
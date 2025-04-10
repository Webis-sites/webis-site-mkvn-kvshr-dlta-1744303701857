'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BookingSection from '@/components/BookingSection';
import FacilitiesGallery from '@/components/FacilitiesGallery';
import TrainerProfiles from '@/components/TrainerProfiles';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TrainerProfiles />
      
      <FacilitiesGallery />
      
      <BookingSection />
      
      <ServicesSection />
      
      <HeroSection />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* כאן יתווספו הקומפוננטות שייווצרו על ידי המחולל */}
      </main>
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 מכון כושר דלתא. webis
        </div>
      </footer>
    </div>
  );
}
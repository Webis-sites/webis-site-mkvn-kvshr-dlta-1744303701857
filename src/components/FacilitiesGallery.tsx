'use client';

// components/GallerySection.tsx
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define the image data type
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Sample gallery images
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gym-equipment-1.jpg',
    alt: 'מכשירי כושר מתקדמים',
    width: 800,
    height: 600,
  },
  {
    id: 2,
    src: '/images/workout-space-1.jpg',
    alt: 'אזור אימון פונקציונלי',
    width: 800,
    height: 600,
  },
  {
    id: 3,
    src: '/images/amenities-1.jpg',
    alt: 'חדרי מלתחות מפוארים',
    width: 800,
    height: 600,
  },
  {
    id: 4,
    src: '/images/gym-equipment-2.jpg',
    alt: 'משקולות חופשיות',
    width: 800,
    height: 600,
  },
  {
    id: 5,
    src: '/images/workout-space-2.jpg',
    alt: 'אזור אימוני קבוצות',
    width: 800,
    height: 600,
  },
  {
    id: 6,
    src: '/images/amenities-2.jpg',
    alt: 'בר מיצים טבעיים',
    width: 800,
    height: 600,
  },
];

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-100 to-gray-200 rtl" dir="rtl">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#9B786F]">הגלריה שלנו</h2>
          <div className="w-24 h-1 bg-[#D4A5A5] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            גלו את המתקנים המתקדמים, אזורי האימון המרווחים והשירותים המיוחדים שאנו מציעים
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-xl bg-white p-4 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,0.8)]"
            >
              <div 
                onClick={() => openLightbox(image)}
                className="cursor-pointer relative overflow-hidden rounded-lg h-64 w-full"
              >
                <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30 border border-white/20 shadow-md rounded-lg z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-full w-full transform transition-transform duration-500 hover:scale-110">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="mt-4 text-center text-lg font-medium text-[#9B786F]">{image.alt}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-[#9B786F]/80 backdrop-blur-sm text-white border border-white/30 shadow-lg hover:bg-[#9B786F]"
            >
              ✕
            </button>
            <div className="relative h-[80vh] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-[#9B786F]/70 backdrop-blur-sm py-2 px-4 mx-4 rounded-lg border border-white/20">
              <p className="font-medium">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;

// app/page.tsx
import GallerySection from '@/components/GallerySection';

export default function Home() {
  return (
    <main>
      <GallerySection />
      {/* Other sections */}
    </main>
  );
}

// Add these styles to your global CSS file or create a new CSS module
// styles/globals.css (add these to your existing file)
@layer utilities {
  .rtl {
    direction: rtl;
  }
}

:root {
  --primary-color: #9B786F;
  --secondary-color: #D4A5A5;
  --neumorphic-light: rgba(255, 255, 255, 0.8);
  --neumorphic-shadow: rgba(0, 0, 0, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-bg: rgba(255, 255, 255, 0.1);
}
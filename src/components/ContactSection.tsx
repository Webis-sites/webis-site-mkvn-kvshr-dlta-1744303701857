import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

interface BusinessHour {
  day: string;
  hours: string;
}

const ContactSection: React.FC = () => {
  const businessHours: BusinessHour[] = [
    { day: 'ראשון', hours: '06:00 - 23:00' },
    { day: 'שני', hours: '06:00 - 23:00' },
    { day: 'שלישי', hours: '06:00 - 23:00' },
    { day: 'רביעי', hours: '06:00 - 23:00' },
    { day: 'חמישי', hours: '06:00 - 23:00' },
    { day: 'שישי', hours: '06:00 - 14:00' },
    { day: 'שבת', hours: 'סגור' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200 rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-right mb-12 text-[#9B786F]">צור קשר</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="order-2 md:order-1">
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] border border-white/20">
              <h3 className="text-2xl font-semibold text-right mb-6 text-[#9B786F]">פרטי התקשרות</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-end gap-4">
                  <div className="text-right">
                    <p className="font-medium">03-1234567</p>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D4A5A5]/20 backdrop-blur-sm shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15),inset_-2px_-2px_5px_rgba(255,255,255,0.5)]">
                    <FaPhone className="text-[#9B786F]" />
                  </div>
                </div>
                
                <div className="flex items-center justify-end gap-4">
                  <div className="text-right">
                    <p className="font-medium">info@hebrewgym.co.il</p>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D4A5A5]/20 backdrop-blur-sm shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15),inset_-2px_-2px_5px_rgba(255,255,255,0.5)]">
                    <FaEnvelope className="text-[#9B786F]" />
                  </div>
                </div>
                
                <div className="flex items-center justify-end gap-4">
                  <div className="text-right">
                    <p className="font-medium">רחוב הרצל 123, תל אביב</p>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D4A5A5]/20 backdrop-blur-sm shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15),inset_-2px_-2px_5px_rgba(255,255,255,0.5)]">
                    <FaMapMarkerAlt className="text-[#9B786F]" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="mt-8 bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] border border-white/20">
              <div className="flex items-center justify-end gap-4 mb-6">
                <h3 className="text-2xl font-semibold text-[#9B786F]">שעות פעילות</h3>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D4A5A5]/20 backdrop-blur-sm shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15),inset_-2px_-2px_5px_rgba(255,255,255,0.5)]">
                  <FaClock className="text-[#9B786F]" />
                </div>
              </div>
              
              <div className="space-y-3">
                {businessHours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                    <span className="font-medium">{item.hours}</span>
                    <span className="font-bold text-[#9B786F]">{item.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="order-1 md:order-2">
            <div className="h-full bg-white/70 backdrop-blur-md p-4 rounded-2xl shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] border border-white/20">
              <div className="relative w-full h-full min-h-[400px] rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27034.817158732625!2d34.76557!3d32.0852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1655668767619!5m2!1sen!2sil" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="מפת המיקום"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-[#9B786F] to-[#D4A5A5] text-white font-medium rounded-full shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out">
            שלח הודעה
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
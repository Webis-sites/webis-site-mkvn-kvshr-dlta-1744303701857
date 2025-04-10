import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

interface FooterProps {
  currentYear?: number;
}

const Footer: React.FC<FooterProps> = ({ currentYear = new Date().getFullYear() }) => {
  return (
    <footer className="rtl bg-gradient-to-br from-gray-100 to-gray-200 backdrop-blur-md bg-opacity-80 border-t border-white/20 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="neumorphic-card">
            <h3 className="text-xl font-bold mb-4 text-[#9B786F]">אודות המכון</h3>
            <p className="text-gray-700 mb-4">
              המכון שלנו מציע מגוון רחב של אימונים ושיעורים מקצועיים בהדרכת מאמנים מוסמכים, בסביבה נעימה ותומכת.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a 
                href="#" 
                className="glassmorphic-icon"
                aria-label="פייסבוק"
              >
                <FaFacebook />
              </a>
              <a 
                href="#" 
                className="glassmorphic-icon"
                aria-label="אינסטגרם"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                className="glassmorphic-icon"
                aria-label="טוויטר"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                className="glassmorphic-icon"
                aria-label="יוטיוב"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="neumorphic-card">
            <h3 className="text-xl font-bold mb-4 text-[#9B786F]">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="footer-link">דף הבית</a>
              </li>
              <li>
                <a href="#" className="footer-link">אודות</a>
              </li>
              <li>
                <a href="#" className="footer-link">שיעורים</a>
              </li>
              <li>
                <a href="#" className="footer-link">מאמנים</a>
              </li>
              <li>
                <a href="#" className="footer-link">מחירון</a>
              </li>
              <li>
                <a href="#" className="footer-link">צור קשר</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="neumorphic-card">
            <h3 className="text-xl font-bold mb-4 text-[#9B786F]">צור קשר</h3>
            <address className="not-italic">
              <p className="mb-2">רחוב הרצל 123, תל אביב</p>
              <p className="mb-2">טלפון: 03-1234567</p>
              <p className="mb-2">דוא"ל: info@gymhebrew.co.il</p>
              <p>שעות פעילות: א'-ה' 06:00-23:00, ו' 06:00-16:00, שבת 08:00-14:00</p>
            </address>
          </div>

          {/* Column 4: Newsletter */}
          <div className="neumorphic-card">
            <h3 className="text-xl font-bold mb-4 text-[#9B786F]">הרשמה לניוזלטר</h3>
            <p className="text-gray-700 mb-4">
              הירשמו לניוזלטר שלנו כדי לקבל עדכונים על שיעורים חדשים ומבצעים מיוחדים.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="הזינו את כתובת האימייל שלכם" 
                  className="glassmorphic-input"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="glassmorphic-button"
              >
                הרשמה
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/20 text-center">
          <p className="text-gray-600">
            © {currentYear} מכון כושר ישראלי. כל הזכויות שמורות.
          </p>
        </div>
      </div>

      <style jsx>{`
        .neumorphic-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3));
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 8px 8px 16px rgba(174, 174, 192, 0.2), 
                      -8px -8px 16px rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        
        .neumorphic-card:hover {
          box-shadow: 10px 10px 20px rgba(174, 174, 192, 0.3), 
                      -10px -10px 20px rgba(255, 255, 255, 0.8);
        }
        
        .footer-link {
          color: #666;
          transition: all 0.3s ease;
          display: inline-block;
          position: relative;
          padding: 0.25rem 0;
        }
        
        .footer-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          display: block;
          right: 0;
          background: linear-gradient(90deg, #9B786F, #D4A5A5);
          transition: width 0.3s ease;
        }
        
        .footer-link:hover {
          color: #9B786F;
        }
        
        .footer-link:hover:after {
          width: 100%;
        }
        
        .glassmorphic-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #9B786F;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .glassmorphic-icon:hover {
          background: rgba(155, 120, 111, 0.2);
          color: #D4A5A5;
          transform: translateY(-3px);
          box-shadow: 0 7px 10px rgba(0, 0, 0, 0.15);
        }
        
        .glassmorphic-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #333;
          transition: all 0.3s ease;
          text-align: right;
          direction: rtl;
          box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.2), 
                      inset -2px -2px 5px rgba(255, 255, 255, 0.7);
        }
        
        .glassmorphic-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(155, 120, 111, 0.5);
          box-shadow: inset 4px 4px 8px rgba(154, 147, 140, 0.3), 
                      inset -4px -4px 8px rgba(255, 255, 255, 0.8),
                      0 0 0 3px rgba(212, 165, 165, 0.1);
        }
        
        .glassmorphic-button {
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          background: linear-gradient(145deg, #9B786F, #D4A5A5);
          color: white;
          font-weight: bold;
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
          width: 100%;
          box-shadow: 3px 3px 7px rgba(154, 147, 140, 0.3), 
                      -3px -3px 7px rgba(255, 255, 255, 0.7);
        }
        
        .glassmorphic-button:hover {
          background: linear-gradient(145deg, #D4A5A5, #9B786F);
          transform: translateY(-2px);
          box-shadow: 5px 5px 10px rgba(154, 147, 140, 0.4), 
                      -5px -5px 10px rgba(255, 255, 255, 0.8);
        }
        
        .glassmorphic-button:active {
          transform: translateY(1px);
          box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.4), 
                      inset -2px -2px 5px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
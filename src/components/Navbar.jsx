import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import logoIcon from '../assets/Shop logo.ico';
import logoIcon2 from '../assets/Shop logo2.ico';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  // Function to toggle between English and Tamil
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ta' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className='absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-black/80 to-transparent'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
        
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src={logoIcon} alt="Shop Icon" className="w-10 h-10 transition-transform duration-500 ease-out transform hover:scale-110" />
          <h2 className="font-bold text-white italic text-lg md:text-xl transition-all duration-500 ease-in-out hover:text-gray-300 text-animating ">
            {t('Sri Sakthi Balan Traders')}
          </h2>
          <img src={logoIcon2} alt="Secondary Shop Icon" className="w-5 h-5 hidden sm:block transition-opacity duration-500 ease-in-out opacity-90 hover:opacity-100 scale-110" />
        </div>

        {/* Navigation Links */}
        <ul className='hidden md:flex gap-7 text-white text-sm lg:text-base'>
          <a href='#Header' className='cursor-pointer hover:text-gray-300 transition-colors'>{t('home')}</a>
          <a href='#Products' className='cursor-pointer hover:text-gray-300 transition-colors'>{t('products')}</a>
          <a href='#About' className='cursor-pointer hover:text-gray-300 transition-colors'>{t('about Us')}</a>
          <a href='#Contact' className='cursor-pointer hover:text-gray-300 transition-colors'>{t('contact')}</a>
        </ul>
        
        {/* Language Toggle Button (Always visible on all screen sizes) */}
        <button 
          className='bg-white text-gray-900 px-6 py-2 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-gray-200 sm:block md:inline-block z-30'
          onClick={toggleLanguage}
        >
          {i18n.language === 'en' ? 'தமிழ்' : 'English'}
        </button>

        {/* Hamburger Menu for Mobile */}
        <svg 
          onClick={() => setOpen(true)}
          width="36" height="29" viewBox="0 0 36 29"
          className="md:hidden w-8 cursor-pointer text-white transition-transform duration-300 transform hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="4" rx="2" fill="white"/>
          <rect x="13" y="12.5" width="23" height="4" rx="2" fill="white"/>
          <rect x="5" y="25" width="31" height="4" rx="2" fill="white"/>
        </svg>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white/95 transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'} z-30`}>
        <div className='flex justify-end p-6'>
          <svg 
            onClick={() => setOpen(false)}
            width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-900 cursor-pointer transition-transform duration-300 transform hover:rotate-90"
          >
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <ul className='flex flex-col items-center gap-5 mt-10 text-lg font-semibold text-gray-900'>
          <a onClick={() => setOpen(false)} href='#Header' className='px-5 py-3 rounded-md hover:bg-gray-200 transition-colors'>{t('home')}</a>
          <a onClick={() => setOpen(false)} href='#Products' className='px-5 py-3 rounded-md hover:bg-gray-200 transition-colors'>{t('products')}</a>
          <a onClick={() => setOpen(false)} href='#About' className='px-5 py-3 rounded-md hover:bg-gray-200 transition-colors'>{t('about Us')}</a>
          <a onClick={() => setOpen(false)} href='#Contact' className='px-5 py-3 rounded-md hover:bg-gray-200 transition-colors'>{t('contact')}</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


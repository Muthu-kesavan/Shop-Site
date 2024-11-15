import React from 'react';
import Navbar from './Navbar';
import TypingEffect from 'react-typing-effect';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  // Adjust font size conditionally based on language for both header and button text
  const textSizeClass = i18n.language === 'ta' ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-5xl sm:text-6xl md:text-[82px]';
  const buttonTextClass = i18n.language === 'ta' ? 'text-base px-4 py-2' : 'text-lg px-6 py-3';

  return (
    <div
      className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative'
      style={{ backgroundImage: "url('updatebg.jpg')" }}
      id='Header'
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white z-10 relative'
      >
        <h2 className={`font-semibold pt-20 inline-block max-w-3xl ${textSizeClass}`}>
          <TypingEffect
            text={[t('Quality rice for every kitchen and every family')]}
            speed={120} 
            eraseDelay={2000} 
            typingDelay={500} 
            eraseSpeed={100} 
            loop={true} 
            cursorRenderer={(cursor) => <h1>{cursor}</h1>} 
          />
        </h2>
        <div className='space-x-6 mt-16'>
          <a 
            href='/product' 
            className={`bg-green-600 rounded-lg text-white font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 ${buttonTextClass}`}
          >
            {t('View all Products')}
          </a>
          <a 
            href='#Contact' 
            className={`bg-blue-600 rounded-lg text-white font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${buttonTextClass}`}
          >
            {t('Contact Us')}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;

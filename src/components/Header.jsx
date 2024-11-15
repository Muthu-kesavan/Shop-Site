import React from 'react';
import Navbar from './Navbar';
import TypingEffect from 'react-typing-effect';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  // Adjust font size conditionally based on language for both header and button text
  const textSizeClass = i18n.language === 'ta' ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-3xl sm:text-4xl md:text-5xl';
  const buttonTextClass = i18n.language === 'ta' ? 'text-sm px-4 py-2' : 'text-md px-5 py-3';

  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center justify-center w-full overflow-hidden relative"
      style={{ backgroundImage: "url('updatebg.jpg')" }}
      id="Header"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-8 px-4 sm:px-6 lg:px-16 text-white z-10 relative"
      >
        {/* Header Text */}
        <h2 className={`font-semibold inline-block max-w-3xl ${textSizeClass}`}>
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

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="/product"
            className={`bg-green-600 rounded-lg text-white font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 ${buttonTextClass}`}
          >
            {t('View all Products')}
          </a>
          <a
            href="#Contact"
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

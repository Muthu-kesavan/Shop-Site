import React from 'react';
import image from '../assets/singleone.png';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.div 
      initial={{opacity: 0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true}}
      className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' 
      id='About'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        {t('About')} 
        <span className='underline underline-offset-4 decoration-1 font-light'>{t(' Us')}</span>
      </h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>{t('Committed to delivering quality in every grain and pulse.')}</p>
      
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img 
          src={image} 
          alt="Brand"
          className='w-full sm:w-1/2 max-w-lg mb-8 md:mb-0' 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div className='text-center md:text-left'>
              <p className='text-4xl font-medium text-gray-800'>{Math.round((new Date().getFullYear() - 1991) / 5) * 5}+</p>
              <p>{t('Years of Industry Experience')}</p>
            </div>

            <div className='text-center md:text-left'>
              <p className='text-4xl font-medium text-gray-800'>{Math.round((new Date().getFullYear() - 2001) / 5) * 5}+</p>
              <p>{t('Years of Serving Quality Rice Products')}</p>
            </div>

            <div className='text-center md:text-left'>
              <p className='text-4xl font-medium text-gray-800'>40+</p>
              <p>{t('Brands of Rice')}</p>
            </div>

            <div className='text-center md:text-left'>
              <p className='text-4xl font-medium text-gray-800'>100%</p>
              <p>{t('Sourced from Trusted Mills')}</p>
            </div>
          </div>

          <p className='my-10 max-w-lg text-center text-gray-600'>
          {t('about_sentence_start')} {new Date().getFullYear() - 2003} {t('years')}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

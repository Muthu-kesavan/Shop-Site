import React from 'react';
import { useTranslation } from 'react-i18next';
import logoIcon from '../assets/Shop logo.ico';
import logoIcon2 from '../assets/Shop logo2.ico';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='w-full md:w-1/2 mb-8 md:mb-0'>
          <div className="flex items-center space-x-2">
            <img src={logoIcon} alt="Shop Icon" className="w-10 h-10 transition-transform duration-500 ease-out transform hover:scale-110" />
            <h2 className='font-bold text-white italic text-lg md:text-xl transition-all duration-500 ease-in-out hover:text-gray-300'>
              {t('Sri Sakthi Balan Traders')}
            </h2>
            <img src={logoIcon2} alt="Secondary Shop Icon" className="w-10 h-10 transition-transform duration-500 ease-out transform hover:scale-110 transition-opacity duration-500 ease-in-out opacity-90 hover:opacity-100 scalse-110" />
          </div>
          <p className='text-gray-400 mt-4 text-lg md:text-xl leading-relaxed mb-6 mr-3'>
            {t('At Sri Sakthi Balan Traders, we offer premium-quality rice to meet the needs of kitchens and families in our region. Our goal is to provide the best products at the right prices.')}
          </p>
        </div>

        {/* Company and Our Services Section */}
        <div className='flex w-full md:w-3/5 justify-between mb-8 md:mb-0'>
          <div className='w-1/2'>
            <h3 className='text-white text-lg font-bold'>{t('Shop')}</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
              <a href='#Header' className='hover:text-white'>{t('Home')}</a>
              <a href='#Products' className='hover:text-white'>{t('Products')}</a>
              <a href='#About' className='hover:text-white'>{t('About Us')}</a>
              <a href='#Contact' className='hover:text-white'>{t('Contact ')}</a>
            </ul>
          </div>

          <div className='w-1/2'>
            <h3 className='text-white text-lg font-bold'>{t('Our Services')}</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
              <li>📦 {t('Free Delivery on Orders Above ₹500')}</li>
              <li>🌾 {t('Premium Quality Rice from Trusted Sources')}</li>
              <li>💰 {t('Competitive Prices and Discounts on Bulk Orders')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Container for Contact and Map */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-8 mb-10">
        {/* Contact Info */}
        <div className='w-full md:w-2/5'>
          <h3 className='text-white text-lg font-bold mb-4'>{t('Contact us')}</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <li>
              <a 
                href="https://www.google.com/maps/place/Sri+sakthi+Balan+traders/@13.0644992,80.0625838,11z/data=!4m6!3m5!1s0x3a526f7a2aa354ff:0xc9345ad8a8b703ad!8m2!3d13.1642977!4d80.3002617!16s%2Fg%2F11llwsb3yc?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white"
              >
                📍 {t('69 Village Street, Tiruvottiyur, Chennai-600019')}
              </a>
            </li>
            <li>
              <a 
                href="tel:+919444780854" 
                className="hover:text-white"
              >
                📞 +91 94447 80854
              </a>
            </li>
          </ul>
        </div>
        {/* Embedded Google Map */}
        <div className="w-full md:w-3/5">
          <h3 className='text-white text-lg font-bold mb-4'>{t('Our Location')}</h3>
          <div className="w-full h-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.9699024969086!2d80.2976867793457!3d13.164297699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f7a2aa354ff%3A0xc9345ad8a8b703ad!2sSri%20sakthi%20Balan%20traders!5e0!3m2!1sen!2sin!4v1731419548041!5m2!1sen!2sin" 
              width="auto" 
              height="auto" 
              style={{border:0}}
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        {t('Copyright 2024')} &#169; Sri Sakthi Balan Traders. {t('All Rights Reserved.')}
        <div className="mt-2">
          {t('Powered by')}{' '}
          <a
            href="https://linkedin.com/in/muthu-kesavan-s" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            DeveloperGuy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

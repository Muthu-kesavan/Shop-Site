import React from 'react';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet-async';
import TypingEffect from 'react-typing-effect';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  // Adjust font size conditionally based on language for both header and button text
  const textSizeClass = i18n.language === 'ta' ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-3xl sm:text-4xl md:text-5xl';
  const buttonTextClass = i18n.language === 'ta' ? 'text-sm px-4 py-2' : 'text-md px-5 py-3';

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Sri Sakthibaln Traders - Quality Rice Shop in Tiruvottiyur, Chennai</title>
        <meta name="description" content="Sri Sakthibaln Traders offers premium quality rice for kitchens and families in Tiruvottiyur, Chennai. Order your rice today!" />
        <meta name="keywords" content="rice shop, premium rice, Tiruvottiyur, Chennai, buy rice, Sri Sakthibalan Traders" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sri Sakthibaln Traders - Premium Rice Shop in Tiruvottiyur, Chennai" />
        <meta property="og:description" content="Discover the best quality rice for your family and kitchen at Sri Sakthibalan Traders in Tiruvottiyur, Chennai. Order online for quick delivery!" />
        <meta property="og:image" content="https://srisakthibalntraders.netlify.app/assets/og-image.jpg" /> {/* Replace with actual image URL */}
        <meta property="og:url" content="https://srisakthibalntraders.netlify.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sri Sakthibaln Traders - Premium Rice Shop" />
        <meta name="twitter:description" content="Best quality rice for every kitchen and family, delivered in Tiruvottiyur, Chennai. Order from Sri Sakthibalan Traders." />
        <meta name="twitter:image" content="https://srisakthibalantraders.netlify.app/assets/og-image.jpg" /> {/* Replace with actual image URL */}

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sri Sakthibalan Traders",
              "image": "https://res.cloudinary.com/dhihzhnut/image/upload/v1731677900/d1ms8xuy6thdjcbvftxo.png", 
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No: 69, Village Street,",
                "addressLocality": "Tiruvottiyur",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600019",
                "addressCountry": "IN"
              },
              "telephone": "+91-9444780854", 
              "url": "https://srisakthibalantraders.netlify.app",
              "openingHours": [
                "Mo-Su 09:00-22:30"
                
              ],
              "sameAs": [
                "https://www.facebook.com/SriSakthibalanTraders",
                "https://twitter.com/SriSakthibalanTraders",
                "https://www.instagram.com/SriSakthibalanTraders"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Main Header Content */}
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
    </>
  );
};

export default Header;

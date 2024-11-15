import React, { useEffect, useState } from 'react';
import { productsData } from '../data';
import { useTranslation } from 'react-i18next';
import leftArrow from '../assets/left_arrow.svg';
import rightArrow from '../assets/right_arrow.svg';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';

const Products = () => {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [animationType, setAnimationType] = useState('slideIn');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(productsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCards();
    window.addEventListener('resize', updateCards);
    return () => window.removeEventListener('resize', updateCards);
  }, []);

  const nxtProduct = () => {
    setIndex((prev) => (prev + 1) % productsData.length);
  };

  const prevProduct = () => {
    setIndex((prev) => (prev === 0 ? productsData.length - 1 : prev - 1));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nxtProduct,
    onSwipedRight: prevProduct,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Conditional paragraph class for different language styles
  const paragraphClass = i18n.language === 'ta' ? 'text-lg max-w-[90%]' : 'text-base max-w-[80%]';

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Products"
      {...swipeHandlers}
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        {t('Our')}
        <span className="underline underline-offset-4 decoration-1 font-light">{t(' Sourced Products')}</span>
      </h1>
      
      {/* Conditionally styled paragraph */}
      <p className={`text-center text-gray-500 mb-8 mx-auto ${paragraphClass}`}>
        {t("We offer a variety of premium-quality rice, carefully sourced to meet your kitchen's needs. Enjoy the best products at competitive prices")}
      </p>

      {/* Slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProduct}
          className="p-3 bg-gray-200 rounded mr-2 transition-all hover:bg-gray-300"
          aria-label="Previous Products"
        >
          <img src={leftArrow} alt="Previous" className="w-5 h-5" />
        </button>
        <button
          onClick={nxtProduct}
          className="p-3 bg-gray-200 rounded mr-2 transition-all hover:bg-gray-300 ml-4"
          aria-label="Next Products"
        >
          <img src={rightArrow} alt="Next" className="w-5 h-5" />
        </button>
      </div>

      {/* Product Slider */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(index * 100) / cardsToShow}%)`,
          }}
        >
          {productsData.map((product, id) => (
            <div
              key={id}
              className="relative flex-shrink-0 w-full sm:w-1/4"
              style={{
                animation: `${animationType} 0.5s ease-out`,
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto mb-14 rounded-lg shadow-xl"
                loading="lazy"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-lg">
                  <h2 className="flex items-center justify-center text-sm font-semibold text-gray-800">{product.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Products;

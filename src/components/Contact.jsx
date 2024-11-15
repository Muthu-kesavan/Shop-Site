import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation(); // Translation hook
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "1de979e9-b7f1-44b7-b9bc-129cc4e5bfbc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success(t('Message sent successfully!'));
        event.target.reset();
      } else {
        console.error("Error:", data);
        toast.error(data.message || t('An error occurred, please try again.'));
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(t('Submission failed. Please try again later.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'
      id='Contact'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        {t('Contact')} <span className='underline underline-offset-4 decoration-1 font-light'>{t('With Us')}</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        {t('Have questions? Let\'s connect and bring the best quality rice to your kitchen!')}
      </p>

      {/* Instant Call Option */}
      <div className='text-center mb-6'>
        <p className='text-lg font-semibold'>{t('Prefer to Call Us Directly?')}</p>
        <a href="tel:+919444780854" className="text-blue-600 hover:underline">+91 94447 80854</a>
      </div>

      <form className='max-w-2xl mx-auto text-gray-600 pt-8' onSubmit={onSubmit}>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left md:pl-4'>
            {t('Your Name')}
            <input
              name="name"
              className='w-full border border-gray-300 rounded py-3 px-4 mt-2 mb-2'
              type='text'
              placeholder={t('Your Name')}
              required
            />
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4'>
            {t('Your Email')}
            <input
              name="email"
              className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
              type='email'
              placeholder={t('Your Email')}
              required
            />
          </div>
        </div>
        <div className='my-6 text-left'>
          {t('Message')}
          <textarea
            name="message"
            className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
            placeholder={t('Message')}
            required
          ></textarea>
        </div>

        {/* Send Button with Loader */}
        <button
          type='submit'
          className='bg-blue-600 text-white py-2 px-4 mb-10 rounded-md hover:bg-blue-700 text-align center'
        >
          {loading ? <ClipLoader color="#ffffff" size={20} /> : t('Send Message')}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;

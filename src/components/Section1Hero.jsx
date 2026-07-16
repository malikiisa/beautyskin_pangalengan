import React from 'react';
import { motion } from 'framer-motion';
import heroIllustration from '../assets/hero_illustration.png';

const Section1Hero = () => {
  const scrollToNext = () => {
    const el = document.getElementById('apa-itu-kosmetik');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[var(--color-pastel-blue)] via-white to-[var(--color-pastel-pink)] overflow-hidden pt-28 pb-20">
      {/* Abstract Background Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--color-pastel-purple)] opacity-50 rounded-full blur-3xl mix-blend-multiply" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--color-pastel-mint)] opacity-50 rounded-full blur-3xl mix-blend-multiply" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-pastel-peach)] opacity-30 rounded-full blur-3xl mix-blend-multiply" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] order-1 flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-full max-w-md lg:max-w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border-4 border-white"
            >
              <img 
                src={heroIllustration} 
                alt="Edukasi Skincare Remaja" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[55%] order-2 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-teal-50 text-[var(--color-teal-dark)] text-sm font-bold mb-6 shadow-sm border border-teal-100 uppercase tracking-wide">
              Edukasi Perawatan Kulit
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight mb-6">
              Smart Teen for <br className="hidden lg:block" />
              <span className="text-[var(--color-teal-main)]">Beauty Skin</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Edukasi mengenai perawatan kulit yang aman, sederhana, dan sesuai untuk remaja agar mampu memilih produk skincare dengan bijak.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToNext}
              className="bg-[var(--color-teal-main)] hover:bg-[var(--color-teal-dark)] text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-[var(--color-teal-main)]/30 transition-all text-lg"
            >
              Mulai Belajar
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Section1Hero;

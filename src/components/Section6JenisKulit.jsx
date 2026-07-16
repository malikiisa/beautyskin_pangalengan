import React from 'react';
import { motion } from 'framer-motion';
import normalImg from '../assets/normal_skin.png';
import berminyakImg from '../assets/berminyak.png';
import keringImg from '../assets/kering.png';
import kombinasiImg from '../assets/kombinasi.png';
import sensitifImg from '../assets/sensitif.png';

const Section6JenisKulit = () => {
  const types = [
    {
      id: 1,
      name: 'Normal',
      desc: 'Kulit seimbang, tidak terlalu kering dan tidak terlalu berminyak.',
      image: normalImg
    },
    {
      id: 2,
      name: 'Berminyak',
      desc: 'Produksi sebum berlebih, sering terlihat mengkilap dan mudah berjerawat.',
      image: berminyakImg
    },
    {
      id: 3,
      name: 'Kering',
      desc: 'Terasa tertarik, kasar, dan kurang kelembapan alami.',
      image: keringImg
    },
    {
      id: 4,
      name: 'Kombinasi',
      desc: 'Berminyak di area T-zone (dahi, hidung, dagu) namun kering di area pipi.',
      image: kombinasiImg
    },
    {
      id: 5,
      name: 'Sensitif',
      desc: 'Mudah kemerahan, gatal, atau iritasi terhadap produk tertentu.',
      image: sensitifImg
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-pastel-blue)] rounded-full blur-3xl opacity-30 mix-blend-multiply" />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Kenali Jenis Kulitmu</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Setiap orang memiliki jenis kulit yang berbeda. Mengetahui jenis kulitmu adalah langkah pertama untuk memilih skincare yang tepat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {types.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-3xl p-6 bg-[var(--color-pastel-blue)]/10 border border-blue-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center backdrop-blur-sm"
            >
              <img 
                src={type.image} 
                alt={type.name} 
                className="w-24 h-24 rounded-full object-cover mb-6 shadow-sm border-2 border-white"
              />
              <h3 className="text-xl font-bold text-slate-800 mb-2">{type.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{type.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6JenisKulit;

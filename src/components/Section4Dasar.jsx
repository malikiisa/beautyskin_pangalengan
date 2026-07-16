import React from 'react';
import { Droplets, CloudRain, SunMedium } from 'lucide-react';
import { motion } from 'framer-motion';

const Section4Dasar = () => {
  const points = [
    {
      icon: <Droplets className="w-10 h-10 text-blue-500" />,
      title: "1. Cleanser",
      desc: "Langkah pertama yang penting untuk mengangkat debu, minyak berlebih, dan kotoran setelah beraktivitas seharian."
    },
    {
      icon: <CloudRain className="w-10 h-10 text-[var(--color-teal-main)]" />,
      title: "2. Moisturizer",
      desc: "Menjaga kelembapan alami kulit agar tetap sehat, kenyal, dan mencegah produksi minyak berlebih pada wajah."
    },
    {
      icon: <SunMedium className="w-10 h-10 text-amber-500" />,
      title: "3. Sunscreen",
      desc: "Melindungi kulit dari paparan buruk sinar UV matahari. Pastikan menggunakan sunscreen dengan minimal SPF 30."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[var(--color-pastel-blue)] to-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-[var(--color-pastel-peach)] rounded-full blur-3xl opacity-40 mix-blend-multiply" />
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Skincare Dasar untuk Remaja (CTM)
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Tiga langkah wajib yang sederhana namun sangat efektif untuk menjaga kesehatan kulitmu sehari-hari.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-pastel-blue)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4Dasar;

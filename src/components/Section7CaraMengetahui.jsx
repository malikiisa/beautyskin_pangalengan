import React from 'react';
import { Droplets, Ban, Clock, FileText, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const Section7CaraMengetahui = () => {
  const steps = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      title: "1. Cuci Wajah",
      desc: "Bersihkan wajah menggunakan sabun cuci muka yang lembut."
    },
    {
      icon: <Ban className="w-8 h-8 text-red-500" />,
      title: "2. Hindari Skincare",
      desc: "Keringkan wajah dan jangan gunakan skincare apa pun setelahnya."
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      title: "3. Tunggu Sejenak",
      desc: "Biarkan kulit dalam keadaan alami selama sekitar 30–60 menit."
    },
    {
      icon: <FileText className="w-8 h-8 text-[var(--color-teal-main)]" />,
      title: "4. Tes dengan Tisu",
      desc: "Tempelkan selembar tisu bersih pada beberapa area wajah (dahi, hidung, pipi, dagu)."
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: "5. Amati Hasilnya",
      desc: "Cek apakah ada minyak yang menempel pada tisu untuk menentukan jenis kulitmu."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[var(--color-pastel-mint)]/20 to-[var(--color-pastel-purple)]/20 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-pastel-blue)] rounded-full blur-3xl opacity-50 mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-pastel-mint)] rounded-full blur-3xl opacity-50 mix-blend-multiply" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Bagaimana Cara Mengetahui Jenis Kulit?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            Ikuti metode tes sederhana ini di rumah untuk mengetahui jenis kulitmu dengan akurat.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-white relative group flex flex-col items-center text-center h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-pastel-mint)]/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shrink-0">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7CaraMengetahui;

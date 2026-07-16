import React from 'react';
import { Info, Sparkles, Shield, Droplets, Smile, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const Section2ApaItu = () => {
  const points = [
    { text: "Membersihkan", icon: <Droplets className="w-5 h-5 text-blue-500" /> },
    { text: "Melindungi", icon: <Shield className="w-5 h-5 text-green-500" /> },
    { text: "Mewangikan", icon: <Sparkles className="w-5 h-5 text-purple-500" /> },
    { text: "Mengubah penampilan", icon: <Smile className="w-5 h-5 text-pink-500" /> },
    { text: "Menjaga tubuh tetap dalam kondisi baik", icon: <Activity className="w-5 h-5 text-[var(--color-teal-main)]" /> }
  ];

  return (
    <section id="apa-itu-kosmetik" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-pastel-mint)] opacity-30 rounded-full blur-3xl mix-blend-multiply translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-6"
          >
            Apa Itu Kosmetik?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Menurut BPOM, kosmetik adalah bahan atau sediaan yang dimaksudkan untuk digunakan pada bagian luar tubuh manusia seperti epidermis, rambut, kuku, bibir, dan organ genital bagian luar, atau gigi dan membran mukosa mulut.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--color-pastel-pink)]/20 p-8 rounded-3xl border border-pink-50 flex-1 shadow-lg shadow-pink-100/50"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Tujuan Penggunaan Kosmetik:</h3>
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-pastel-peach)] flex items-center justify-center shrink-0">
                    {point.icon}
                  </div>
                  <span className="font-semibold text-slate-700">{point.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[var(--color-teal-main)] to-[var(--color-teal-dark)] p-8 md:p-12 rounded-3xl text-white shadow-xl flex-1 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
            <Info className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">Tahukah Kamu?</h3>
            <p className="text-xl leading-relaxed text-teal-50">
              "Skincare merupakan bagian dari kosmetik."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section2ApaItu;

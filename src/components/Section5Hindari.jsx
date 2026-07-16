import React from 'react';
import { XOctagon } from 'lucide-react';
import { motion } from 'framer-motion';

const Section5Hindari = () => {
  const hindariList = [
    "Over-skincare (menggunakan terlalu banyak produk sekaligus).",
    "Produk anti-aging untuk remaja (belum diperlukan).",
    "Eksfoliasi berlebihan yang dapat merusak skin barrier.",
    "Produk dengan kandungan alkohol atau pewangi yang mengiritasi.",
    "Produk kecantikan tanpa izin resmi BPOM."
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[var(--color-pastel-mint)]/30 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[var(--color-pastel-pink)] rounded-full blur-3xl opacity-50 mix-blend-multiply" />
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Hal yang Perlu Dihindari</h2>
          <p className="text-slate-600 text-lg">
            Jangan sampai salah langkah! Hindari beberapa kesalahan umum berikut agar kulit remajamu tetap sehat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hindariList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-md shadow-[var(--color-softblue-hover)]/30 flex items-start gap-4 border-l-4 border-red-400"
            >
              <div className="mt-1">
                <XOctagon className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-slate-700 leading-relaxed font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5Hindari;

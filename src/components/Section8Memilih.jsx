import React from 'react';
import { Box, Tag, ShieldCheck, CalendarX } from 'lucide-react';
import { motion } from 'framer-motion';

const Section8Memilih = () => {
  const klikSteps = [
    {
      icon: <Box className="w-10 h-10 text-orange-500" />,
      title: "Cek Kemasan",
      desc: "Pastikan kemasan produk tidak rusak, bocor, penyok, atau berubah bentuk."
    },
    {
      icon: <Tag className="w-10 h-10 text-blue-500" />,
      title: "Cek Label",
      desc: "Pastikan informasi produk lengkap, jelas, dan mudah dibaca."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[var(--color-teal-main)]" />,
      title: "Cek Izin Edar",
      desc: "Pastikan produk memiliki nomor notifikasi BPOM yang sah."
    },
    {
      icon: <CalendarX className="w-10 h-10 text-red-500" />,
      title: "Cek Kedaluwarsa",
      desc: "Periksa tanggal kedaluwarsa sebelum membeli atau menggunakan produk."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[var(--color-pastel-pink)]/20 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[var(--color-pastel-peach)] rounded-full blur-3xl opacity-40 mix-blend-multiply -translate-x-1/2" />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Cara Memilih Skincare yang Aman (KLIK)
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Terapkan metode Cek KLIK setiap kali kamu akan membeli atau menggunakan produk skincare baru.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {klikSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="p-8 rounded-3xl bg-[var(--color-pastel-pink)]/10 border border-pink-50 shadow-xl shadow-pink-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-pink-50">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section8Memilih;

import React from 'react';
import { AlertTriangle, Skull, FlaskConical, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

const Section9Kandungan = () => {
  const warnings = [
    {
      icon: <Skull className="w-10 h-10 text-red-600" />,
      title: "Merkuri",
      desc: "Sangat beracun. Dapat menyebabkan kerusakan kulit permanen dan berbahaya bagi kesehatan ginjal dan saraf."
    },
    {
      icon: <FlaskConical className="w-10 h-10 text-orange-600" />,
      title: "Hidrokuinon",
      desc: "Sering disalahgunakan untuk memutihkan. Tidak boleh digunakan sembarangan tanpa pengawasan tenaga medis."
    },
    {
      icon: <AlertTriangle className="w-10 h-10 text-yellow-600" />,
      title: "Tretinoin",
      desc: "Bahan keras yang berisiko memicu iritasi dan kemerahan parah. Gunakan hanya berdasarkan resep dokter."
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-purple-600" />,
      title: "Kortikosteroid",
      desc: "Penggunaan jangka panjang tanpa indikasi medis dapat merusak kulit, membuatnya menipis dan lebih sensitif."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[var(--color-pastel-pink)]/20 to-[var(--color-pastel-purple)]/20 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[var(--color-pastel-blue)] rounded-full blur-3xl opacity-40 mix-blend-multiply" />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Kandungan yang Perlu Diwaspadai
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Hati-hati dengan produk yang menjanjikan hasil instan. Waspadai bahan-bahan berbahaya berikut ini pada komposisi skincare-mu.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {warnings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="p-8 rounded-3xl bg-white border border-red-100 shadow-xl shadow-red-500/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-100 transition-all duration-300">
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

export default Section9Kandungan;

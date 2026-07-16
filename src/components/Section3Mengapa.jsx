import React from 'react';
import { Sun, Heart, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Section3Mengapa = () => {
  const points = [
    {
      icon: <TrendingUp className="w-10 h-10 text-orange-500" />,
      title: "Munculnya Permasalahan Kulit Selama Pubertas",
      desc: "Pada masa pubertas, perubahan hormon dapat memicu berbagai permasalahan kulit seperti kulit berminyak, komedo, dan jerawat."
    },
    {
      icon: <Heart className="w-10 h-10 text-rose-500" />,
      title: "Investasi Perawatan Jangka Panjang",
      desc: "Membiasakan merawat kulit sejak remaja merupakan investasi untuk menjaga kesehatan kulit di masa depan serta membantu mencegah berbagai masalah kulit."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-[var(--color-teal-main)]" />,
      title: "Meningkatkan Rasa Percaya Diri",
      desc: "Kulit yang terawat dapat membuat remaja merasa lebih nyaman dan percaya diri dalam menjalani aktivitas sehari-hari."
    },
    {
      icon: <Sun className="w-10 h-10 text-yellow-500" />,
      title: "Banyaknya Aktivitas di Luar Ruangan",
      desc: "Remaja sering beraktivitas di luar ruangan sehingga kulit lebih sering terpapar sinar matahari, debu, dan polusi. Skincare membantu melindungi kulit dari paparan tersebut."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[var(--color-pastel-blue)] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-[var(--color-pastel-purple)] rounded-full blur-3xl opacity-40 -translate-x-1/2" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-[var(--color-pastel-peach)] rounded-full blur-3xl opacity-40 translate-x-1/2" />
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Mengapa Remaja Perlu Skincare?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Perawatan kulit tidak hanya untuk orang dewasa. Remaja juga membutuhkannya karena beberapa alasan penting berikut ini.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group text-center md:text-left"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-pastel-pink)] flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300">
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

export default Section3Mengapa;

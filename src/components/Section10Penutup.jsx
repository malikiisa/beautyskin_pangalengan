import React from 'react';
import { ExternalLink, CheckCircle2, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Section10Penutup = () => {
  const tips = [
    "Gunakan skincare sesuai kebutuhan kulit.",
    "Hindari produk tanpa izin edar.",
    "Selalu cek keamanan produk sebelum membeli.",
    "Konsistensi lebih penting daripada banyak produk."
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[var(--color-pastel-mint)] rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[var(--color-pastel-purple)] rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-800 mb-6"
          >
            Rawat Kulitmu dengan <span className="text-[var(--color-teal-main)]">Bijak</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Merawat kulit tidak harus mahal atau rumit. Yang terpenting adalah memahami kebutuhan kulit, memilih produk yang aman, dan menggunakannya secara konsisten.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col items-center text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-teal-dark)] to-slate-900 opacity-20" />
          <div className="relative z-10 w-full max-w-3xl">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-6 h-6 text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-white font-medium">{tip}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-300 text-base md:text-lg mb-8 max-w-2xl mx-auto font-medium">
              Setelah mempelajari seluruh materi, yuk uji pemahamanmu melalui post-test interaktif atau cek keamanan produk skincare melalui BPOM.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 w-full">
              <Link 
                to="/post-test" 
                className="inline-flex items-center justify-center gap-3 bg-[var(--color-teal-main)] hover:bg-[var(--color-teal-light)] hover:text-[var(--color-teal-dark)] text-white font-bold py-5 px-8 rounded-full shadow-lg shadow-[var(--color-teal-main)]/30 transition-all active:scale-95 text-lg md:text-xl w-full md:w-auto"
              >
                <span>📝 Kerjakan Post-Test</span>
                <ClipboardCheck className="w-6 h-6" />
              </Link>
              
              <a 
                href="https://cekbpom.pom.go.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[var(--color-teal-main)] hover:bg-[var(--color-teal-light)] hover:text-[var(--color-teal-dark)] text-white font-bold py-5 px-8 rounded-full shadow-lg shadow-[var(--color-teal-main)]/30 transition-all active:scale-95 text-lg md:text-xl w-full md:w-auto"
              >
                <span>🔍 Cek Produk di BPOM</span>
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>

            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
              "Pastikan skincare yang akan digunakan telah memiliki nomor notifikasi BPOM agar lebih aman digunakan."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Section10Penutup;

import React from 'react';
import { motion } from 'framer-motion';
import { questions } from '../data/questions';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const Answer = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Access Notice Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-orange-50 border border-orange-200 rounded-2xl p-4 flex gap-4 items-start shadow-sm"
        >
          <AlertCircle className="text-orange-500 w-6 h-6 flex-shrink-0 mt-0.5" />
          <p className="text-orange-800 text-sm md:text-base font-medium">
            Halaman ini merupakan kunci jawaban yang diperuntukkan bagi fasilitator atau pembimbing. Mohon tidak membagikan isi halaman ini kepada peserta sebelum post-test selesai.
          </p>
        </motion.div>

        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4"
          >
            Kunci Jawaban Post-Test
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Halaman ini berisi jawaban resmi untuk seluruh soal post-test.
          </motion.p>
        </div>

        {/* Answer List */}
        <div className="space-y-6">
          {questions.map((q, idx) => (
            <motion.div 
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-slate-100"
            >
              <div className="mb-4">
                <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-softblue)] text-[var(--color-teal-dark)] text-xs font-bold mb-3 uppercase tracking-wide">
                  Question {idx + 1}
                </span>
                <p className="text-lg font-bold text-slate-800">{q.question}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-green-50/50 p-4 rounded-xl border border-green-100">
                  <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-green-800 mb-1">Jawaban:</p>
                    <p className="text-green-700 font-medium">{q.options[q.correctAnswer]}</p>
                  </div>
                </div>

                <div className="bg-[var(--color-pastel-blue)]/30 p-4 rounded-xl border border-blue-100/50">
                  <p className="text-sm font-semibold text-slate-700 mb-1">Penjelasan:</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{q.explanation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Answer;

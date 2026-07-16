import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { questions } from '../data/questions';
import { RotateCcw, Home, Timer } from 'lucide-react';

const PostTest = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (index) => {
    if (selectedOption !== null) return; // Prevent changing answer during auto-advance
    
    setSelectedOption(index);
    
    const isCorrect = index === currentQ.correctAnswer;
    setAnswers(prev => [...prev, { questionId: currentQ.id, selectedOption: index, isCorrect }]);

    if (isCorrect) setScore((prev) => prev + 1);

    // Auto-advance after 700ms
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
        setTimeLeft(30);
      } else {
        setIsFinished(true);
      }
    }, 700);
  };

  useEffect(() => {
    if (isFinished || selectedOption !== null) return;
    
    if (timeLeft <= 0) {
      setAnswers(prev => [...prev, { questionId: currentQ.id, selectedOption: null, isCorrect: false }]);
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedOption(null);
        setTimeLeft(30);
      } else {
        setIsFinished(true);
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isFinished, selectedOption, currentIndex, currentQ.id]);

  useEffect(() => {
    if (isFinished) {
      window.scrollTo(0, 0);
      const percentage = (score / questions.length) * 100;
      if (percentage >= 80) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#14b8a6', '#fce7f3', '#dbeafe', '#fcd34d']
        });
      }
    }
  }, [isFinished, score]);

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setIsFinished(false);
    setScore(0);
    setTimeLeft(30);
    window.scrollTo(0, 0);
  };

  const getFeedbackMessage = (percentage) => {
    if (percentage >= 90) return "Luar biasa! Kamu sudah memahami materi dengan sangat baik.";
    if (percentage >= 70) return "Bagus! Pemahamanmu sudah cukup baik. Tetap semangat belajar.";
    return "Masih ada beberapa materi yang perlu dipelajari kembali.";
  };

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border-t-8 border-[var(--color-teal-main)] text-center mb-10"
          >
            <h1 className="text-4xl font-extrabold text-slate-800 mb-2">
              {percentage >= 80 ? '🎉 Selamat!' : '📚 Hasil Post-Test'}
            </h1>
            <p className="text-xl text-slate-600 mb-8">{getFeedbackMessage(percentage)}</p>
            
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="bg-[var(--color-softblue)] rounded-2xl p-6 w-40">
                <p className="text-sm text-slate-500 font-medium mb-1">Skor Benar</p>
                <p className="text-3xl font-bold text-slate-800">{score} / {questions.length}</p>
              </div>
              <div className="bg-[var(--color-pastel-mint)] rounded-2xl p-6 w-40">
                <p className="text-sm text-slate-500 font-medium mb-1">Persentase</p>
                <p className="text-3xl font-bold text-[var(--color-teal-dark)]">{percentage}%</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <button 
                onClick={restartQuiz}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--color-teal-main)] border-2 border-[var(--color-teal-main)] rounded-xl font-bold hover:bg-teal-50 transition-colors"
              >
                <RotateCcw size={20} /> Ulangi Post-Test
              </button>
              <button 
                onClick={() => navigate('/')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-teal-main)] text-white rounded-xl font-bold hover:bg-[var(--color-teal-dark)] transition-colors shadow-lg shadow-[var(--color-teal-main)]/30"
              >
                <Home size={20} /> Kembali ke Beranda
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const progressPercentage = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-pastel-blue)] via-white to-[var(--color-pastel-pink)] flex items-center justify-center py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-2xl w-full">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-slate-800 hidden sm:block">Post-Test Pemahaman</h2>
            <h2 className="text-xl font-bold text-slate-800 sm:hidden">Post-Test</h2>
            
            <div className="flex gap-2 sm:gap-3">
              <span className={`text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full border flex items-center gap-1.5 transition-colors ${
                timeLeft <= 5 ? 'bg-red-50 text-red-600 border-red-200' :
                timeLeft <= 10 ? 'bg-orange-50 text-orange-600 border-orange-200' :
                'bg-slate-50 text-slate-600 border-slate-200'
              }`}>
                <Timer size={16} className={timeLeft <= 10 ? 'animate-pulse' : ''} />
                00:{timeLeft.toString().padStart(2, '0')}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[var(--color-teal-main)] bg-teal-50 px-2 sm:px-3 py-1 rounded-full border border-teal-100">
                Pertanyaan {currentIndex + 1} / {questions.length}
              </span>
            </div>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5 mb-2 overflow-hidden">
            <motion.div 
              className="bg-[var(--color-teal-main)] h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          <p className="text-slate-500 text-sm">Pilih jawaban yang paling tepat berdasarkan materi.</p>
        </div>

        {/* Question Card */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 sm:p-10 border border-slate-100"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-8 leading-snug">
                {currentQ.question}
              </h3>

              <div className="space-y-4">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;

                  let buttonStyle = "bg-slate-50 border-slate-200 text-slate-700 hover:bg-[var(--color-softblue)] hover:border-[var(--color-teal-light)]";
                  
                  if (isSelected) {
                    buttonStyle = "bg-[var(--color-teal-light)] border-[var(--color-teal-main)] text-[var(--color-teal-dark)] ring-2 ring-[var(--color-teal-main)] ring-opacity-50";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={selectedOption !== null}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${buttonStyle}`}
                    >
                      <span className="font-medium pr-4">{option}</span>
                      
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex-shrink-0"
                        >
                          <div className="w-5 h-5 rounded-full bg-[var(--color-teal-main)] border-4 border-white shadow-sm ring-1 ring-[var(--color-teal-main)]" />
                        </motion.div>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default PostTest;

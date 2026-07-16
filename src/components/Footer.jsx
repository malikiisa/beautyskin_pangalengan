import React from 'react';
import { Sparkles, ExternalLink, Link as LinkIcon, Star } from 'lucide-react';

const Footer = () => {
  const scrollToText = (text) => {
    const sections = Array.from(document.querySelectorAll('section'));
    const target = sections.find(sec => sec.textContent.includes(text));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[var(--color-pastel-blue)]/60 to-[var(--color-pastel-pink)]/30 border-t border-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-pastel-mint)] rounded-full blur-3xl opacity-40 mix-blend-multiply translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-pastel-purple)] rounded-full blur-3xl opacity-40 mix-blend-multiply -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          
          {/* LEFT COLUMN: About Project */}
          <div className="flex flex-col bg-white/50 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white h-full">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-[var(--color-teal-main)] shrink-0" />
              <h3 className="text-xl font-extrabold text-slate-800 leading-tight">
                Smart Teen for <br/><span className="text-[var(--color-teal-main)]">Beauty Skin</span>
              </h3>
            </div>
            <p className="mb-6 text-slate-600 font-medium">
              Website edukasi mengenai perawatan kulit yang aman bagi remaja.
            </p>
            <div className="text-sm text-slate-600 mb-6 bg-white/80 p-4 rounded-xl">
              <p className="font-bold text-slate-800">KKN-PPM Universitas Gadjah Mada</p>
              <p>Periode 2 Tahun 2026</p>
            </div>
            <div className="mt-auto">
              <p className="text-sm font-bold text-slate-800 mb-3">Disusun oleh:</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-center gap-2"><Star className="w-4 h-4 text-[var(--color-teal-main)]"/> Icha Dwi Anggita</li>
                <li className="flex items-center gap-2"><Star className="w-4 h-4 text-[var(--color-teal-main)]"/> Isa Maliki</li>
              </ul>
            </div>
          </div>

          {/* CENTER COLUMN: Quick Links */}
          <div className="flex flex-col bg-white/50 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white h-full">
            <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <LinkIcon className="w-5 h-5 text-blue-500" />
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Beranda', target: 'Smart Teen for Beauty Skin' },
                { label: 'Apa Itu Kosmetik', target: 'Apa Itu Kosmetik?' },
                { label: 'Skincare Dasar', target: 'Skincare Dasar untuk Remaja' },
                { label: 'Jenis Kulit', target: 'Kenali Jenis Kulitmu' },
                { label: 'Tips Memilih Skincare', target: 'Cara Memilih Skincare' },
                { label: 'Penutup', target: 'Rawat Kulitmu dengan Bijak' }
              ].map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToText(link.target)}
                  className="text-left text-slate-600 hover:text-[var(--color-teal-main)] hover:translate-x-2 transition-all font-medium py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Referensi Resmi */}
          <div className="flex flex-col bg-white/50 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white h-full">
            <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-purple-500" />
              Referensi Resmi
            </h4>
            <div className="flex flex-col gap-4">
              <a 
                href="https://www.pom.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group bg-white p-4 rounded-xl hover:shadow-md transition-all border border-slate-100"
              >
                <span className="font-bold text-slate-700 group-hover:text-[var(--color-teal-main)] transition-colors">BPOM</span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[var(--color-teal-main)]" />
              </a>
              <a 
                href="https://cekbpom.pom.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group bg-white p-4 rounded-xl hover:shadow-md transition-all border border-slate-100"
              >
                <span className="font-bold text-slate-700 group-hover:text-[var(--color-teal-main)] transition-colors">Cek BPOM</span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[var(--color-teal-main)]" />
              </a>
              <a 
                href="https://kemkes.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group bg-white p-4 rounded-xl hover:shadow-md transition-all border border-slate-100"
              >
                <span className="font-bold text-slate-700 group-hover:text-[var(--color-teal-main)] transition-colors">Kementerian Kesehatan RI</span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[var(--color-teal-main)]" />
              </a>
            </div>
          </div>
          
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/60 pt-8 flex flex-col items-center justify-center text-center">
          <p className="text-sm font-bold text-slate-700 mb-1">
            &copy; 2026 Smart Teen for Beauty Skin
          </p>
          <p className="text-xs text-slate-500 font-medium">
            KKN-PPM Universitas Gadjah Mada Periode 2 Tahun 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

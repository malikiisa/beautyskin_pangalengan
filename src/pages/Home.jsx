import React from 'react';
import Section1Hero from '../components/Section1Hero';
import Section2ApaItu from '../components/Section2ApaItu';
import Section3Mengapa from '../components/Section3Mengapa';
import Section4Dasar from '../components/Section4Dasar';
import Section5Hindari from '../components/Section5Hindari';
import Section6JenisKulit from '../components/Section6JenisKulit';
import Section7CaraMengetahui from '../components/Section7CaraMengetahui';
import Section8Memilih from '../components/Section8Memilih';
import Section9Kandungan from '../components/Section9Kandungan';
import Section10Penutup from '../components/Section10Penutup';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen font-sans bg-white overflow-x-hidden">
      <Section1Hero />
      <Section2ApaItu />
      <Section3Mengapa />
      <Section4Dasar />
      <Section5Hindari />
      <Section6JenisKulit />
      <Section7CaraMengetahui />
      <Section8Memilih />
      <Section9Kandungan />
      <Section10Penutup />
      <Footer />
    </div>
  );
};

export default Home;

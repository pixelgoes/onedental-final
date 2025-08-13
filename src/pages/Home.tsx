import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import DoctorSection from '../components/sections/DoctorSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <DoctorSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default Home;

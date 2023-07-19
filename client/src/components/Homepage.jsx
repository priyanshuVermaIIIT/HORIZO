import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TestimonialsSlider from './TestimonialsSlider';

import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TestimonialsSlider/>

     
      <Footer/>
    </div>
  );
};

export default HomePage;

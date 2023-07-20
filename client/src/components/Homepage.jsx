import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TestimonialsSlider from './TestimonialsSlider';

import Footer from './Footer';
import TShirtCustomizer from './TShirtCustomizer';
import ProductView from './ProductView';
import FeaturedProducts from './FeaturedProducts';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedProducts/>
     
      <TShirtCustomizer/>
      <TestimonialsSlider/>
      <ProductView/>


     
      <Footer/>
    </div>
  );
};

export default HomePage;

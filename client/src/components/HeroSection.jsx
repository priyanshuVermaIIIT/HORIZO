import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-f2f1ef text-white">
      <div className="container mx-auto py-16 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 px-4 md:px-8 mb-8 md:mb-0 relative">
          <motion.img
            src="/Images/tshirt1.jpeg" // Replace with the URL of your hero image
            alt="Hero Image"
            className="w-full h-[730px] object-cover rounded-lg shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        
        </div>
        <motion.div
          className="w-full md:w-1/2 px-4 md:px-8 relative z-10"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-9xl font-cinzel text-gray-800 mb-4">
            Horizon  Discover the T-Shirt Wonderland
          </h1>
          <p className="text-xl mb-8 text-black font-serif">
            Embrace your style with our unique collection of T-shirts, carefully
            designed to match your taste and take you on an unforgettable journey.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-d9b18e text-white bg-black rounded hover:bg-a67564 font-source-sans-pro text-lg mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Shop Now
          </motion.button>
          
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

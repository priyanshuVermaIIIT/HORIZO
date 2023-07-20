import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TShirtCustomizer = () => {
  const [shirtColor, setShirtColor] = useState('#ffffff');
  const [shirtText, setShirtText] = useState('Custom Text');
  const [shirtDesign, setShirtDesign] = useState('');

  const handleColorChange = (e) => {
    setShirtColor(e.target.value);
  };

  const handleTextChange = (e) => {
    setShirtText(e.target.value);
  };

  const handleDesignChange = (e) => {
    setShirtDesign(e.target.value);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-lg p-6 shadow-md"
            whileHover={{ scale: 1.05 }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-4 font-lato">T-Shirt Customizer</h2>
            <div className="mb-4">
              <label htmlFor="colorPicker" className="block text-sm font-medium font-lato">
                T-Shirt Color:
              </label>
              <input
                type="color"
                id="colorPicker"
                value={shirtColor}
                onChange={handleColorChange}
                className="w-16 h-8 ml-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="text" className="block text-sm font-medium font-lato">
                Text:
              </label>
              <input
                type="text"
                id="text"
                value={shirtText}
                onChange={handleTextChange}
                className="w-full px-3 py-2 rounded-md border"
              />
            </div>
            <div>
              <label htmlFor="design" className="block text-sm font-medium font-lato">
                Design:
              </label>
              <select
                id="design"
                value={shirtDesign}
                onChange={handleDesignChange}
                className="w-full px-3 py-2 rounded-md border"
              >
                <option value="">Select a design</option>
                <option value="design1">Design 1</option>
                <option value="design2">Design 2</option>
                {/* Add more design options here */}
              </select>
            </div>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg p-6 shadow-md flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="w-40 h-48 rounded-lg border-2 border-gray-300 flex items-center justify-center"
              style={{ background: shirtColor }}
            >
              <p className="text-black font-medium font-lora">{shirtText}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TShirtCustomizer;

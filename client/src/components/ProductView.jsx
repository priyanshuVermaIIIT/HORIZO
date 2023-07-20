import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProductView = () => {
  const [shirtColor, setShirtColor] = useState('#ffffff');
  const [shirtSize, setShirtSize] = useState('M');
  const [shirtQuantity, setShirtQuantity] = useState(1);

  const handleColorChange = (e) => {
    setShirtColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setShirtSize(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setShirtQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    // Implement the logic to add the selected product to the cart
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-full h-80 rounded-lg border-2 border-white flex items-center justify-center"
            style={{ background: shirtColor }}
            whileHover={{ scale: 1.1 }}
          >
            <p className="text-white font-medium font-lora text-2xl">T-Shirt Preview</p>
          </motion.div>
          <motion.div
            className="bg-black rounded-lg p-6 shadow-md"
            whileHover={{ scale: 1.05 }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-4 font-lato">Product Details</h2>
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
              <p className="text-sm text-gray-300 mt-2">Color Name: {shirtColor}</p>
            </div>
            <div className="mb-4">
              <label htmlFor="size" className="block text-sm font-medium font-lato">
                Size:
              </label>
              <select
                id="size"
                value={shirtSize}
                onChange={handleSizeChange}
                className="w-full px-3 py-2 rounded-md border"
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-sm font-medium font-lato">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={shirtQuantity}
                onChange={handleQuantityChange}
                min="1"
                className="w-full px-3 py-2 rounded-md border"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="px-8 py-3 bg-black text-white rounded hover:bg-white hover:text-black font-lato text-lg mb-4"
            >
              Add to Cart
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductView;

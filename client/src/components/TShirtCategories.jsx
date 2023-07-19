import React from 'react';
import { motion } from 'framer-motion';

const TShirtCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Vintage Classics',
      image: 'category_image_1.jpg', // Replace with the URL of category image 1
    },
    {
      id: 2,
      name: 'Retro Vibes',
      image: 'category_image_2.jpg', // Replace with the URL of category image 2
    },
    {
      id: 3,
      name: 'Graphic Tees',
      image: 'category_image_3.jpg', // Replace with the URL of category image 3
    },
    {
      id: 4,
      name: 'Nature Inspired',
      image: 'category_image_4.jpg', // Replace with the URL of category image 4
    },
    {
      id: 5,
      name: 'Urban Chic',
      image: 'category_image_5.jpg', // Replace with the URL of category image 5
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold font-lora text-gray-200 mb-4">Explore T-Shirt Categories</h2>
        <motion.div className="flex overflow-x-auto space-x-4">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="w-72 flex-shrink-0 bg-black rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, duration: 0.5, delay: category.id * 0.1 }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold font-lato text-white mb-2">{category.name}</h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-200 font-lato text-lg"
                >
                  See More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TShirtCategories;

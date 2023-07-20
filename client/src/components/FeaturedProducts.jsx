import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import 'intersection-observer'; // Import intersection-observer polyfill

const useFetchProducts = () => {
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      // Simulating fetching products from an API
      setTimeout(() => {
        const fetchedProducts = [
          // Add your featured products data here
          {
            id: 1,
            name: 'Product 1',
            image: '/Images/tshirt1.jpeg', // Replace with the actual URL of the image
            price: '$19.99',
          },
          {
            id: 2,
            name: 'Product 2',
            image: '/Images/tshirt2.jpeg', // Replace with the actual URL of the image
            price: '$24.99',
          },
          // Add more products as needed
        ];

        setProducts(fetchedProducts);
        setProductsLoaded(true); // Set productsLoaded to true when products are fetched
      }, 1000); // Simulated delay for product fetching
    };

    fetchProducts();
  }, []);

  return { productsLoaded, products };
};

const FeaturedProducts = () => {
  const { productsLoaded, products } = useFetchProducts();
  const animationControls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  // Handle animation when the component is in view
  useEffect(() => {
    if (isVisible) {
      animationControls.start({ opacity: 1, y: 0 });
    }
  }, [animationControls, isVisible]);

  // Check if products are not loaded yet, render a loading state
  if (!productsLoaded) {
    return (
      <div className="bg-white py-16 text-center">
        <h2 className="text-4xl font-semibold mb-8 font-lato">Featured Products</h2>
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-8 font-lato">Featured Products</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={animationControls}
          ref={(node) => {
            if (node) setIsVisible(true);
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-gray-200 p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-md" />
              <h3 className="text-lg font-semibold font-lato">{product.name}</h3>
              <p className="text-gray-600 font-lato">{product.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-d9d2cc p-4 flex items-center justify-between">
      <div className="text-4xl font-serif">HORIZON</div>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-800 font-lato hover:text-gray-700">Home</a>
        <a href="#" className="text-gray-800 font-lato hover:text-gray-700">Shop</a>
        <a href="#" className="text-gray-800 font-lato hover:text-gray-700">About</a>
        <a href="#" className="text-gray-800 font-lato hover:text-gray-700">Contact</a>
        <div className="bg-white px-3 py-1 rounded-full"> 
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

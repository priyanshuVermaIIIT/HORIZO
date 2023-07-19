import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
              semper velit.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">
              Email: contact@horizon.com
              <br />
              Phone: +1 123-456-7890
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Twitter
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded bg-white text-gray-800 focus:outline-none focus:ring focus:border-d9b18e"
              />
              <button
                type="submit"
                className="mt-2 w-full py-2 px-4 bg-d9b18e text-white rounded hover:bg-a67564 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-white border-opacity-20 pt-4">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Horizon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

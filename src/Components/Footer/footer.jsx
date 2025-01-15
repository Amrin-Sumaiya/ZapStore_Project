import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center border-b border-gray-700 pb-8">
          {/* Company Branding */}
          <div className="mb-6 lg:mb-0">
            <h1 className="text-3xl font-extrabold tracking-wide text-white">ZapStore</h1>
            <p className="text-sm mt-2 text-gray-400">
              Redefining shopping with the latest trends and top-quality products.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-500 transition">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-500 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-500 transition">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-500 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-500 transition">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-between text-center lg:text-left py-8">
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-500 transition">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-500 transition">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-500 transition">Press</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-500 transition">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-500 transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-500 transition">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3">
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <p className="text-gray-400">
              123 ZapStreet, TrendCity, TX 75001
            </p>
            <p className="text-gray-400 mt-2">
              Email: support@zapstore.com
            </p>
            <p className="text-gray-400 mt-2">
              Phone: +1 (800) 123-4567
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 pt-6 border-t border-gray-700">
          &copy; {new Date().getFullYear()} ZapStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;



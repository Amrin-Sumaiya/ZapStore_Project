import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex justify-center space-x-6">
          {/* Add social media icons or links */}
          <a href="#" className="text-xl hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-xl hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-xl hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-xl hover:text-gray-400">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center space-x-6 mt-4">
          <a href="#" className="text-sm hover:text-gray-400">About Us</a>
          <a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="text-sm hover:text-gray-400">Terms of Service</a>
          <a href="#" className="text-sm hover:text-gray-400">Contact</a>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


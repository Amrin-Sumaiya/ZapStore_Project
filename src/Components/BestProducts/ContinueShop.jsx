import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import tt from '../../assets/tt.png';

const ContinueShop = () => {
  return (
    <div className=" mx-auto text-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:bg-slate-500">
      {/* Image on top */}
      <div className="mb-6">
        <img src={tt} alt="Thank You" className="w-full max-w-md mx-auto rounded-lg shadow-lg dark:bg-slate-200" />
      </div>

      {/* Thank You Header */}
      <h2 className="text-4xl font-extrabold text-purple-800 dark:text-slate-800 mb-4">
        Thank You for Your Purchase!
      </h2>
      
      {/* Description */}
      <p className="text-lg text-gray-700 dark:text-slate-800 mb-4">
        Thank you for buying products from our pages. You will get your products soon through our delivery service.
      </p>
      
      {/* Confirmation Section */}
      <div className="flex justify-center items-center text-3xl font-semibold text-purple-700 dark:text-black">
        <FaCheckCircle className="text-green-500 text-5xl mr-4" />
        <span>Your order is confirmed!</span>
      </div>


    </div>
  );
};

export default ContinueShop;




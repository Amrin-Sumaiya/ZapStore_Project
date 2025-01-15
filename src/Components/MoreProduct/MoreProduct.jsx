import React from 'react';
import { useNavigate } from 'react-router-dom';
import mb1 from '../../assets/mb1.jpg';
import mb2 from '../../assets/mb2.jpg';
import mb3 from '../../assets/mb3.jpg';
import mb4 from '../../assets/mb4.jpg';

const MoreProduct = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, image: mb1, name: 'Ketli', description: 'High-quality and affordable', price: 'Price: 1000' },
    { id: 2, image: mb2, name: 'Multiplug', description: 'Loved by our customers', price: 'Price: 800' },
    { id: 3, image: mb3, name: 'Water Pot', description: 'Best in class and trendy', price: 'Price: 980' },
    { id: 4, image: mb4, name: 'Shaving Machine', description: 'Crafted for perfection', price: 'Price: 1200' },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-900">
            Let’s Explore Our Products
          </p>
          <h1 className="text-4xl font-extrabold text-gray-800">Product Collection</h1>
          <p className="text-sm text-gray-600 mt-4">
            Browse through our exclusive range of high-quality products curated just for you.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow group overflow-hidden"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform"
              />

              {/* Product Info */}
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                <h3 className="text-lg font-bold text-gray-800">{product.price}</h3>
              </div>


            </div>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/best-seller')}
            className="flex items-center px-6 py-2 bg-violet-600 text-white rounded-full shadow-lg hover:bg-violet-700 transition duration-300"
          >
            <span className="mr-2">More Products</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreProduct;





import React, { useEffect, useState } from 'react';
import Bs4 from '../../assets/Bs4.jpg';
import Bs5 from '../../assets/Bs5.jpg';
import Bs6 from '../../assets/Bs6.jpg';
import Bs7 from '../../assets/Bs7.jpg';
import Bs8 from '../../assets/Bs8.jpg';
import Bs10 from '../../assets/Bs10.jpg';

const sellers = [
  { name: 'Heater', 
    title: 'Electronic',
    description: '10 years guaranteed',
    Price: 10000, 
    image: Bs4,
    Incart: false, 
    id: 4
   },
  { name: 'Blender',
     title: 'Electronic', 
     description: '10 years guaranteed',
      Price: 6000,
       image: Bs5,
        Incart: false,
         id: 5 
        },
  { name: 'Microwave',
     title: 'Electronic', 
     description: '10 years guaranteed',
      Price: 7000, 
      image: Bs6, 
      Incart: false,
       id: 6 
      },
  { name: 'Light',
     title: 'Electronic', 
     description: '10 years guaranteed',
      Price: 700, 
      image: Bs7, 
      Incart: false,
       id: 7 
      },
  { name: 'Table-Fan',
     title: 'Electronic', 
     description: '10 years guaranteed', 
     Price: 2000,
      image: Bs8,
       Incart: false,
        id: 8 
      },
  { name: 'Hair-Dryer', 
    title: 'Electronic', 
    description: '10 years guaranteed',
     Price: 1000,
      image: Bs10,
       Incart: false, 
       id: 9 },
];

const BestSeller = ({ cart, setCart }) => {
  const [updatedSellers, setUpdatedSellers] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const sellersWithCartState = sellers.map((product) => ({
      ...product,
      Incart: storedCart.some((cartItem) => cartItem.id === product.id),
    }));
    setUpdatedSellers(sellersWithCartState);
  }, [cart]);
  

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    const updatedCart = existingProduct
      ? cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Best Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {updatedSellers.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{product.title}</p>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-lg font-bold text-gray-900 mb-4">${product.Price}</p>
            <button
              onClick={() => addToCart(product)}
              className={`px-4 py-2 rounded-full w-full transition duration-300 ${
                product.Incart
                  ? 'bg-red-600 text-white'
                  : 'bg-purple-900 text-white hover:bg-purple-700'
              }`}
            >
              {product.Incart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;




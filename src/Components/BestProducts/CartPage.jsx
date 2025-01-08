import React from 'react'

const CartPage = ({ cart, removeFromCart, updateCart }) => {
    const totalPrice = cart.reduce((acc, product) => acc + product.Price * (product.quantity || 1), 0);
    const totalQuantity = cart.reduce((acc, product) => acc + (product.quantity || 1), 0);
    

    // function to handle increment 
    const handleIncrement = (productId) => {
      const updatedCart = cart.map((product) =>
      product.id === productId 
      ?  {...product, quantity: (product.quantity || 1) + 1}
      : product
    );
    updateCart(updatedCart)
    };

    //function to handle decrement
    const handleDecrement = (productId) => {
      const updatedCart = cart.map((product) => 
      product.id === productId && product.quantity > 1
    ? {...product, quantity: product.quantity - 1 }
    : product
  );
  updateCart(updatedCart)
    }
  
    return (
      <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Products List</h2>
      {cart.length === 0 ? (
        <div className="text-center text-xl font-semibold text-gray-700"> Product list is Empty!</div>
    

      ) : (
        <>
          <div className="mb-8 p-6  bg-gray-200 rounded-lg shadow-lg">
           <div className="flex justify-between mb-4">
           <p className="text-lg font-semibold">Total Quantity: {totalQuantity}</p>
           </div>

          </div>
          <div className="space-y-6">
            {cart.map((product) => (
              <div key={product.id} className="flex justify-between items-center bg-white shadow-lg rounded-lg p-4 transform hover:scale-105 transition duration-300 ease-in-out">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
               <div className="flex-1">
               <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold text-gray-900 mb-4">
                  Subtotal: ${(product.Price * (product.quantity || 1)).toFixed(2)}
                </p>
               </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDecrement(product.id)}
                    className="px-3 py-2 bg-gray-600 text-white font-bold rounded-full  hover:bg-gray-500 transition duration-300"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{product.quantity || 1}</span>
                  <button
                    onClick={() => handleIncrement(product.id)}
                    className="px-3 py-2 bg-gray-600 text-white font-semibold rounded-full  hover:bg-gray-500 transition duration-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="ml-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-full  hover:bg-red-500 transition duration-300"
                >
                  Remove Product
                </button>
              </div>
            ))}
            <div className="flex justify-between bg-gray-100 text-white font-semibold rounded-lg shadow-lg ">
              <p className="text-xl font-semibold text-gray-800">Total Price: ${totalPrice.toFixed(2)}</p>
              <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition duration-300">
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
  
  export default CartPage;

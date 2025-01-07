import React from 'react'

const CartPage = ({ cart, setCart}) => {
    const removeFromCart = (productId ) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart))
    };
  return (
    <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4"> Your Products</h2>
        {cart.length === 0 ? (
            <p>No Products</p>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 gap-4">
                {cart.map((product) =>  (
                    <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-500 text-sm mb-2">{product.title}</p>
                        <p className="text-gray-700 mb-4">{product.description}</p>

                        <p className="text-lg font-bold text-gray-900 mb-4">${product.Price}</p>
                        <button onClick={() => removeFromCart(product.id)}
                            className="px-4 py-4 bg-red-600 text-white text-bold rounded-full w-full hover:bg-red-500 transition duration-300"> Remove Product
                            
                        </button>

                    </div>

                ))}

            </div>

        )}
      
    </div>
  )
}

export default CartPage

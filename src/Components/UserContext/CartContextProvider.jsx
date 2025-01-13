import React, { createContext, useState } from 'react'

//create context
export const CartContext = createContext();

const CartContextProvider = ({ Children }) => {
    

    const [cart, setCart ] = useState(JSON.parse(localStorage.getItem('cart')) || []
);

const updatedCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

};
//remove item cart
const removeFromCart = (productId ) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    updatedCart(updatedCart)
};
return (
    <CartContext.Provider
    value={{
        cart,
        updatedCart,
        removeFromCart,
    }}
    >
        {Children}

    </CartContext.Provider>
)
}
export default CartContextProvider;
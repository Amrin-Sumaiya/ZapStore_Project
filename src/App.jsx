import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Nabvar/Navbar';
import Hero from './Components/Hero/Hero';
import Banner from './Components/Banner/Banner';
import { ThemeProvider } from './Components/Nabvar/ThemeContext';
import BestProducts from './Components/BestProducts/BestProducts';
import BestSeller from './Components/data/BestSeller';
import CartPage from './Components/BestProducts/CartPage';
import Login from './Components/Nabvar/Login';
import { UserContextProvider } from './Components/UserContext/UserContextProvider';
import Footer from './Components/Footer/footer';
import ContinueShop from './Components/BestProducts/ContinueShop';
import { ToastContainer } from 'react-toastify';
import BrandPromote from './Components/BrandPromote/BrandPromote';
import MoreProduct from './Components/MoreProduct/MoreProduct';



export const userContext = React.createContext()
const App = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);


  const updateCart = (updatedCart) => {
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }


  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  



  return (
    <div className=" dark:bg-slate-600 dark:text-white duration-200">

      <UserContextProvider> 
      <ThemeProvider>
        <Router>
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
          {/* Always render Navbar, pass login state and handlers */}
          <Navbar
           cartCount={cart.length} 

           />

          <Routes>
            {/* Home Route - Includes Hero and Banner */}
            <Route path="/" element={
              <div>
                <Hero />
                <BestProducts />
                <BrandPromote />
                <MoreProduct />
                <Banner />
              </div>
            } />

            {/* Best Seller Route */}
            <Route path="/best-seller" element={<BestSeller cart={cart} setCart={setCart} />} />
            
            {/* Cart Page - Only Cart and Navbar */}
            <Route path="/cart" element={<CartPage cart={cart}  removeFromCart={removeFromCart} updateCart={updateCart} />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/continueshop" element={<ContinueShop />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
      </UserContextProvider>
    </div>
  );
};

export default App;






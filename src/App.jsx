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


export const userContext = React.createContext()
const App = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
//  const [isLoggedIn, setIsLoggedIn] = useState(false);

 {/*  //check login state from localstorage on mount
  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);


  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  }; */}

  return (
    <div className="bg-slate-100 dark:bg-slate-700 dark:text-white duration-200">
      <UserContextProvider> 
      <ThemeProvider>
        <Router>
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
                <Banner />
              </div>
            } />

            {/* Best Seller Route */}
            <Route path="/best-seller" element={<BestSeller cart={cart} setCart={setCart} />} />
            
            {/* Cart Page - Only Cart and Navbar */}
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
            <Route path="/login" element={<Login />}/>
          </Routes>
        </Router>
      </ThemeProvider>
      </UserContextProvider>
    </div>
  );
};

export default App;






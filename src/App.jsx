import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
import Navbar from './Components/Nabvar/Navbar';
import Hero from './Components/Hero/Hero';
import { ThemeProvider } from './Components/Nabvar/ThemeContext';
import BestProducts from './Components/BestProducts/BestProducts';
import Banner from './Components/Banner/Banner';
import BestSeller from './Components/data/BestSeller';

const App = () => {
const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  return (
    <div className="bg-slate-100 dark:bg-slate-700 dark:text-white duration-200">
      <ThemeProvider>
        <Router>
          {/* Navbar will be present on all pages */}
          <Navbar cartCount={cart.length} /> 
          <Hero /> {/* Hero section can stay visible on all pages */}

          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<BestProducts />} /> {/* Home page */}
              <Route path="/best-seller" element={<BestSeller  cart={cart} setCart={setCart} />} /> {/* Best Seller page */}
              {/* Add other routes as necessary */}
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
      <Banner /> {/* Banner component will always be displayed */}
    </div>
  );
};

export default App;




import React, { useContext } from 'react';
import logo from "../../assets/logo.png.png";
import { FaCaretDown } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContextProvider.jsx';

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Best Seller", link: "/best-seller" },
];

const DropdownLinks = [
  { name: "Trending Products", link: "/#" },
  { name: "Best Selling", link: "/#" },
  { name: "Author", link: "/#" },
];

const Navbar = ({ cartCount }) => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    
  };

  const handleOrderNowClick = () => {
    navigate('/cart'); 
  };

  return (
    <div className="shadow-lg bg-white dark:bg-gray-800 dark:text-white duration-200">
      <div className="container py-3 sm:py-0"></div>
      <div className="flex justify-between items-center">
        <div>
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src={logo} alt="" className="w-10" />
            <span className="font-bold text-3xl sm:text-4xl">ZapStore</span>
          </a>
        </div>
        <div className="flex items-center justify-between gap-4 font-semibold">
          <div>
            <ul className="items-center gap-4 hidden sm:flex transition duration-300">
              <DarkMode />
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <Link to={menu.link} className="inline-block py-4 px-4 hover:text-purple-600">
                    {menu.name}
                  </Link>
                </li>
              ))}
              <li>
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-4 rounded-full hover:bg-red-500 transition duration-300"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-4 rounded-full flex item-center hover:scale-110 transition duration-300"
                  >
                    Login
                  </Link>
                )}
              </li>
              <li className="group relative cursor-pointer">
                <a href="/#" className="flex h-[72px] items-center gap-2">
                  Quick Links
                  <span>
                    <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute left-0 hidden group-hover:block text-black bg-white p-2 mt-2">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.name}>
                        <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-purple-800/20 shadow-md">
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <button
                  onClick={handleOrderNowClick}
                  className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-full flex items-center transition duration-300 hover:scale-110"
                >
                  <div>
                    <span className="absolute top-0 right-0 bg-red-600 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center -translate-x-1/2 translate-y-1/3 z-10">
                      {cartCount}
                    </span>
                  </div>
                  Order Now
                  <FaCartShopping className="text-xl text-white drop-shadow-sm ml-2 relative z-0" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;









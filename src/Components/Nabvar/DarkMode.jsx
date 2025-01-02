import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from './ThemeContext';


const DarkMode = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className="flex items-center gap-2 py-4 px-4 hover:text-purple-600"
      >
        {darkMode ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-gray-600" />
        )}
        <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </div>
  );
};

export default DarkMode;


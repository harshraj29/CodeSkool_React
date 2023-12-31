import React, { useState } from 'react';
import { menu, close } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  // Retrieve the user's information from local storage
  const storedUser = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className="border-gray-200 bg-[#4BA3C3]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/home" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CODESKOOL
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover-bg-gray-100 focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={handleClick}
        >
          <span className="sr-only">Open main menu</span>
          <img src={!toggle ? menu : close} alt="menu" className="w-5 h-5" />
        </button>
        <div
          className={`w-full md:block md:w-auto ${toggle ? '' : 'hidden'
            }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent">
            {/* <li>
              <a href="/home" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white">
                HOME
              </a>
            </li> */}
            <li>
              <a href="/home" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 dark:text-white">
                HOME
              </a>
            </li>
            <li>
              <a href="/html" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 dark:text-white">
                HTML
              </a>
            </li>
            <li>
              <a href="/html" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 dark:text-white">
                CSS
              </a>
            </li>
            <li>
              <a href="/html" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 dark:text-white">
                JAVASCRIPT
              </a>
            </li>
            <li>
              <a href="/html" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 dark:text-white">
                REACT
              </a>
            </li>
            <li>
              <a href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 dark:text-white">
                CONTACT
              </a>
            </li>
            {storedUser ? (
              <li>
                <span className="block py-2 pl-3 pr-4 text-[#4BA3C3] bg-[#CCE6F4] rounded-xl">
                  {storedUser.name}
                </span>
              </li>
            ) : (
              <li>
                <a href="/Login" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 dark:text-white">
                  LOGIN
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

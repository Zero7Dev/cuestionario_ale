'use client'

import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className="relative">
      {/* Botón de menú */}
      <button
        onClick={toggleMenu}
        className="flex items-center p-2 text-white bg-blue-500 rounded-md focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
{/* Menú deslizante */}
{isOpen && (
  <div className="absolute left-0 bg-gray-800 bg-opacity-90 p-2 rounded-lg shadow-lg max-w-md">
    <ul className="flex flex-col p-2">
      <li className="py-2 px-2 hover:bg-blue-600 transition duration-200 ease-in-out">
        <a href="/" className="text-white">Formulario</a>
      </li>
      <hr className="border-t border-gray-500" />
      <li className="py-2 px-2 hover:bg-blue-600 transition duration-200 ease-in-out">
        <a href="te-amo" className="text-white">Te amo</a>
      </li>
      <hr className="border-t border-gray-500" />
      <li className="py-2 px-2 hover:bg-blue-600 transition duration-200 ease-in-out">
        <a href="Nuestros-Planes" className="text-white">Nuestros Planes</a>
      </li>
      <hr className="border-t border-gray-500" />
      <li className="py-2 px-2 hover:bg-blue-600 transition duration-200 ease-in-out">
        <a href="Canciones" className="text-white">Canciones</a>
      </li>
      <hr className="border-t border-gray-500" />
      <li className="py-2 px-2 hover:bg-blue-600 transition duration-200 ease-in-out">
        <a href="Cartas-para-Ti" className="text-white">Cartas para Ti</a>
      </li>
    </ul>
  </div>
)}

    </div>
  );
};

export default HamburgerMenu;

import React, { useState } from 'react';
import HelpSection from '../help/HelpSection';

const Header = () => {
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="flex py-4 justify-between items-center container mx-auto flex-col md:flex-row">
      <div className="flex items-center justify-center mb-6 md:mb-0">
        <img src="logo.png" alt="Photo Caption Tool Logo" className="h-12 md:h-16 mr-2 md:mr-4"></img>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Oleo Script' }}>
          Photo Caption Tool
        </h1>
        <h2 className="hidden md:block text-sm text-white font-bold ml-4 bg-red-600 rounded-full py-1 px-3">BETA</h2>
      </div>
      <div className="mb-2 md:mb-0">
        <a className="hover:bg-gray-800 transition-colors duration-200 bg-gray-800 text-white font-bold text-xl rounded-md py-2 px-4 mr-8"
          href="#help"
        >
          Help / FAQ
        </a>
        <a className="hover:bg-gray-800 transition-colors duration-200 bg-gray-800 text-white font-bold text-xl rounded-md py-2 px-4"
          href="#about"
        >
          About
        </a>
      </div>
    </div>
    </nav>
  )
}

export default Header

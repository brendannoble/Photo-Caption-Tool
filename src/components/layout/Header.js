import React, { useState } from 'react';
import HelpSection from '../help/HelpSection';

const Header = () => {
  return (
    <>
    <nav className="bg-gray-900 shadow-lg">
      <div className="flex p-4 justify-between items-center container mx-auto flex-col md:flex-row">
      <div className="flex items-center justify-center mb-6 md:mb-0">
        <img src="logo.png" alt="Photo Caption Tool Logo" className="h-12 md:h-16 mr-2 md:mr-4"></img>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Oleo Script' }}>
          Photo Caption Tool
        </h1>
        <h2 className="hidden md:block text-sm text-white font-bold ml-4 bg-red-600 rounded-full py-1 px-3">BETA</h2>
      </div>
      <div className="mb-2 md:mb-0">
        <a className="hover:bg-gray-700 transition-colors duration-200 bg-gray-800 text-white font-bold text-md md:text-lg rounded-md py-2 px-4 mr-8"
          href="#help"
        >
          Help / FAQ
        </a>
        <a className="hover:bg-gray-700 transition-colors duration-200 bg-gray-800 text-white font-bold text-md md:text-lg rounded-md py-2 px-4"
          href="#about"
        >
          About
        </a>
      </div>
    </div>
    </nav>
    <div className="bg-gray-300">
      <div className="container mx-auto py-4 px-10 md:px-0 text-gray-800 text-sm md:text-lg font-bold text-center">
        The quick and easy caption tool for desktop and mobile <i class="fas fa-desktop mx-1"></i> <i class="fas fa-mobile-alt mx-1"></i>
      </div>
    </div>
    </>
  )
}

export default Header

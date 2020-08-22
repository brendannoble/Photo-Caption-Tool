import React, { useState } from 'react';
import HelpSection from '../help/HelpSection';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-gray-900 shadow-lg">
      <div className="flex py-4 justify-between items-center container mx-auto flex-col md:flex-row">
      <div className="flex items-center justify-center">
        <img src="logo.png" alt="Photo Caption Tool Logo" className="h-12 md:h-16 mr-2 md:mr-4"></img>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-white mb-4 md:mb-0">
          Photo Caption Tool
        </h1>
        <h2 className="hidden md:block text-xs text-white font-bold ml-4 bg-red-600 rounded-full py-1 px-3">BETA</h2>
      </div>
      <div>
        <button onClick={() => setIsOpen(!isOpen)} className="hover:bg-gray-800 transition-colors duration-200 text-white border-2 border-white rounded-md p-2 md:mr-8">
          Help / FAQ
        </button>
      </div>
    </div>
    </nav>
    { isOpen && <HelpSection isOpen={isOpen} setIsOpen={setIsOpen} /> }
    </>
  )
}

export default Header

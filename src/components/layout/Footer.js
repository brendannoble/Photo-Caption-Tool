import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-10 text-center">
      <a href="mailto:me@brendannoble.com?subject=PhotoCaptionTool%20Issue">
        <div className="mb-4 px-4 py-2 font-bold text-white border-2 border-gray-500 inline-block rounded-md hover:bg-yellow-300 hover:border-yellow-600 hover:text-gray-800 transition-colors duration-200">
          <i className="fas fa-exclamation-triangle mr-1"></i> See an issue? Report it here
        </div>
      </a>
      <div className="font-bold text-gray-500">
      Created by <a href="https://www.linkedin.com/in/brendan-noble/" target="_blank" rel="noopener noreferrer" className="text-blue-500"> Brendan Noble</a> <div>Copyright 2020</div> </div>
    </footer>
  )
}

export default Footer;

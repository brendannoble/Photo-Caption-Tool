import React from 'react'

const Header = () => {
  return (
    <nav className='bg-blue-500 py-2 px-4 absolute w-full shadow-md'>
      <div className='flex justify-between'>
        <div className="flex items-center gap-4">
          <img
            src='logo.png'
            alt='Photo Caption Tool Logo'
            className='h-8 lg:h-8'
          ></img>
          <h1 className="font-bold text-xl text-white" style={{fontFamily: 'Poppins, sans-serif'}}>
            PhotoCaptionTool
          </h1>
          <h2 className="text-xs text-blue-900">Version 2.0</h2>
        </div>
      </div>
    </nav>
  )
}

export default Header

import React from 'react'

const ScrollFAB = () => {

  const handleClick = (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="fixed bottom-0 right-0">
      <div className="rounded-full bg-blue-500 text-white text-2xl h-12 w-12 flex justify-center items-center mr-4 mb-4 shadow-lg" onClick={handleClick}>
        <i class="fa-solid fa-chevron-up"></i>
      </div>
    </div>
  )
}

export default ScrollFAB
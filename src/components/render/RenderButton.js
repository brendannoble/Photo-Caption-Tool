import React from 'react';

const RenderButton = () => {
  // TODO Render photo when button is clicked
  return (
    <button className="hover:bg-yellow-500 hover:text-yellow-900 transition-colors duration-200 bg-green-500 block my-4 mx-auto h-16 text-lg md:h-24 md:text-4xl font-bold px-12 text-white rounded-md py-2 shadow-md">
      <i className="far fa-comment-alt mr-2"></i> Create Captioned Image
    </button>
  )
}

export default RenderButton;
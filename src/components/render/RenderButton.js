import React from 'react'

const RenderButton = ({ startRender }) => {
  return (
    <div className='bottom top-0 left-0 flex justify-center w-full pb-4'>
      <button
        onClick={startRender}
        className='mx-auto hover:bg-yellow-500 hover:text-yellow-900 transition-colors duration-200 bg-green-500 block text-md  md:text-2xl font-bold px-12 text-white rounded-md py-4 shadow-lg'
      >
        <i className='far fa-comment-alt mr-2'></i> Create Captioned Image
      </button>
    </div>
  )
}

export default RenderButton

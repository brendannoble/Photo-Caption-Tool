import React from 'react'

const SaveButton = ({url, filename}) => {
  return (
    <a className="w-full md:w-auto text-center bg-orange-500 hover:bg-orange-600 mb-4 transition-colors duration-150 text-white rounded-md py-2 px-3 shadow-md inline-block font-bold" href={url} download={`${filename}-captioned.jpg`}>
      <i className="fas fa-file-download mr-2"></i> Save Image
    </a>
  )
}

export default SaveButton;

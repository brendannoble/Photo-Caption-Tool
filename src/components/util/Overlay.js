import React from 'react';
import GridLoader from 'react-spinners/GridLoader';

const Overlay = () => {

  // TODO Fix overlay on mobile

  return (
    <div id="overlay">
      <div id="loading-text" className="flex flex-col p-8 card items-center text-xl md:text-3xl text-gray-800 font-bold absolute text-center">
        <GridLoader
          size={35}
          color={'#03A9F4'}
          loading={true}
        />
        <h2 className="mt-6">AUTOMAGICALLY CREATING YOUR CAPTION...</h2>
      </div>
    </div>
  )
}

export default Overlay;

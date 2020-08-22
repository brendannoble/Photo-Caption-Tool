import React, { useContext } from 'react';
import { SettingsContext } from '../../contexts/SettingsContext';
import placeholder from  '../../assets/placeholder.png';

const Render = ({ isPreview }) => {

  const { state } = useContext(SettingsContext);

  return (
    <div className={(state.captionPlacement === 'bottom' ? 'flex flex-col' : 'flex flex-col-reverse')}>
      <img src={!state.fileSelected ? placeholder : state.imageUrl} alt="Your inserted image"/>
      <div className="flex"
        style={{
          margin: state.marginSize + 'px',
          fontSize: state.fontSize + 'px'
        }}>
        <p className="flex flex-grow w-0" style={{whiteSpace: 'pre-line'}}>
         { state.captionText == '' ? 'Enter your caption below' : state.captionText}
        </p>
      </div>
    </div>
  )
}

export default Render;

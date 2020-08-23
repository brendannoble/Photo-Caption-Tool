import React, { useContext, createRef } from 'react';
import { SettingsContext } from '../../contexts/SettingsContext';
import placeholder from  '../../assets/placeholder.png';

const Render = ({ isPreview }) => {

  const { state, ACTIONS, dispatch } = useContext(SettingsContext);

  const imageRef = createRef();

  const onPreviewLoad = async (e) => {
    dispatch({ type: ACTIONS.SET_WIDTH, payload: e.target.width });
    dispatch({ type: ACTIONS.SET_NATURALWIDTH, payload: e.target.naturalWidth });
    dispatch({ type: ACTIONS.SET_SCALE, payload: (e.target.naturalWidth / e.target.width)});
  }

  return (
    <div id={(!isPreview) ? 'render' : null} className={(state.captionPlacement === 'bottom' ? 'flex flex-col' : 'flex flex-col-reverse')}
    >
      <img 
        ref={imageRef}
        src={!state.fileSelected ? placeholder : state.imageUrl}
        alt="Your inserted image"
        onLoad={(isPreview && state.fileSelected) ? (e) => onPreviewLoad(e) : null}
      />
      <div className="flex"
        style={{
          padding: (isPreview) ? state.marginSize + 'px' : state.marginSize * state.scale,
          fontSize: (isPreview) ? state.fontSize + 'px' : state.fontSize * state.scale,
          backgroundColor: state.backgroundColor
        }}>
        <p className="flex flex-grow w-0" 
          style={{
            whiteSpace: 'pre-line',
            justifyContent: state.alignment,
            fontWeight: (state.bold) ? 'bold' : 'normal',
            fontStyle: (state.italic) ? 'italic' : 'normal',
            textDecoration: (state.underline) ? 'underline' : 'initial',
            color: state.textColor,
          }}
        >
         { state.captionText === '' ? 'Enter your caption below' : state.captionText}
        </p>
      </div>
    </div>
  )
}

export default Render;

import React, { useContext } from 'react';
import domtoimage from 'dom-to-image';
import PreviewContainer from '../preview/PreviewContainer';
import OutputContainer from '../output/OutputContainer';
import RenderButton from './RenderButton';
import { SettingsContext } from '../../contexts/SettingsContext';
import Render from './Render';
import Overlay from '../util/Overlay';

const RenderController = () => {

  const { state, ACTIONS, dispatch } = useContext(SettingsContext);

  const startRender = () => {
    if (!state.fileSelected) {
      alert('Please select a photo');
      // TODO Add stylized alert
      return;
    };
    if (state.isRendering) return;
    dispatch({ type: ACTIONS.TOGGLE_ISRENDERING});

    domtoimage.toJpeg(document.querySelector('#render')).then((dataUrl) => {
      dispatch({ type: ACTIONS.SET_FINALIMAGEURL, payload: dataUrl});
      dispatch({ type: ACTIONS.TOGGLE_ISRENDERING});
      // TODO Implement better scrolling
      window.location = "#image-output";
    }).catch((err) => {
      console.error('Oops, something went wrong!', err);
      dispatch({ type: ACTIONS.TOGGLE_ISRENDERING});
    });
  }

  return (
    <>
      <PreviewContainer/>
      <RenderButton startRender={startRender}/>
      <OutputContainer/>
      <div style={{
        overflowX: 'scroll',
        width: state.naturalWidth
        }}
        className={ !state.isRendering ? 'hidden' : null}
      >
        <Render isPreview={false}/>
      </div>
      { (state.isRendering) ? <Overlay/> : null }
    </>
  )
}

export default RenderController;

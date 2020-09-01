import React, { useContext } from 'react';
import domtoimage from 'dom-to-image';
import FileSaver, { saveAs } from 'file-saver';
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
    dispatch({ type: ACTIONS.TOGGLE_ISRENDERING });

    // Check browser type

    let ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    let browser;

    if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
      browser = "msie";
    } else {
      browser = ua[1].toLowerCase();
    }

    if (browser !== 'safari') {
      domtoimage.toJpeg(document.querySelector('#render')).then((dataUrl) => {
        dispatch({ type: ACTIONS.SET_FINALIMAGEURL, payload: dataUrl });
        dispatch({ type: ACTIONS.TOGGLE_ISRENDERING });
        // TODO Implement better scrolling
        window.location = "#image-output";
      }).catch(err => {
        alert('An error has occurred');
        console.error('Oops, something went wrong!', err);
        dispatch({ type: ACTIONS.TOGGLE_ISRENDERING});
      });
    } else {
      domtoimage.toSvg(document.querySelector('#render')).then((dataUrl) => {

        let blob;

        fetch(dataUrl)
        .then(res => blob = res.blob())
        .then(FileSaver.saveAs(blob))

        dispatch({ type: ACTIONS.SET_FINALIMAGEURL, payload: dataUrl});
        dispatch({ type: ACTIONS.TOGGLE_ISRENDERING});
        window.location = "#image-output";
      }).catch(err => {
        alert('An error has occurred');
        console.error('Oops, something went wrong!', err);
        dispatch({ type: ACTIONS.TOGGLE_ISRENDERING});
      });
    }
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

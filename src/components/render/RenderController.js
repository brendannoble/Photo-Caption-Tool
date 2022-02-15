import React, { useState, useContext } from 'react';
import domtoimage from 'dom-to-image';
import PreviewContainer from '../preview/PreviewContainer';
import RenderButton from './RenderButton';
import { SettingsContext } from '../../contexts/SettingsContext';
import Render from './Render';
import Overlay from '../util/Overlay';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const RenderController = () => {

  const { state, ACTIONS, dispatch } = useContext(SettingsContext);
  const [ modalOpen, setModalOpen ] = useState(false);

  const startRender = () => {
    if (!state.fileSelected) {
      openModal();
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
      domtoimage.toJpeg(document.querySelector('#render'), { quality: state.quality })
      .then((dataUrl) => {
        dispatch({ type: ACTIONS.SET_FINALIMAGEURL, payload: dataUrl });
        dispatch({ type: ACTIONS.TOGGLE_ISRENDERING });
        window.location = "#image-output";
      }).catch(err => {
        alert('An error has occurred');
        console.error('Oops, something went wrong!', err);
        dispatch({ type: ACTIONS.TOGGLE_ISRENDERING});
      });
    } else {
      dispatch({ type: ACTIONS.TOGGLE_ISRENDERING });
      alert('Due to an issue with Safari, we are unable to support iOS at this time.');
    }
  }

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div className="h-100 md:h-screen overflow-y-auto p-12">
      <PreviewContainer/>
      <RenderButton startRender={startRender}/>
      <div style={{
        overflowX: 'scroll',
        width: state.naturalWidth
        }}
        className={ !state.isRendering ? 'hidden' : null }
      >
        <Render isPreview={false}/>
      </div>
      { (state.isRendering) ? <Overlay/> : null }
      <Modal open={modalOpen} onClose={closeModal} classNames={{ modal: 'modal', "bg-gray-800": 'bg-gray-800'}} center>
        <h2 className="text-2xl text-gray-800 text-center font-bold m-6"><i className="fas fa-image mr-2"></i> Please select a photo first</h2>
        <button className="btn w-full bg-blue-500 hover:bg-blue-400" onClick={() => closeModal()}>OK</button>
      </Modal>
    </div>
  )
}

export default RenderController;

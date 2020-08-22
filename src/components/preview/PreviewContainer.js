import React from 'react';
import Render from '../render/Render';
import ControlsContainer from '../controls/ControlsContainer';

const PreviewContainer = () => {

  return (
    <section>
      <h1 className="section-header">Caption Preview</h1>
      <div className="card p-5 mb-8">
      <div className="shadow-md inline-block">
        <Render isPreview={true}/>
      </div>
      <ControlsContainer/>
      </div>
    </section>
  )
}

export default PreviewContainer;

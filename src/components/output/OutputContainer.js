import React, { useContext } from 'react';
import { SettingsContext } from '../../contexts/SettingsContext';
import OutputPlaceholder from './OutputPlaceholder';
import OutputImage from './OutputImage';
import SaveButton from './SaveButton';

const OutputContainer = () => {

  const { state } = useContext(SettingsContext);

  return (
    <section>
      <h1 id="image-output" className="section-header">Image Output</h1>
      <div className="card  p-5 mb-8">
        { (state.finalImageUrl !== '') ? <SaveButton url={state.finalImageUrl} filename={state.fileName} /> : null }
        <div className="flex justify-center">
          { (state.finalImageUrl === '') ? <OutputPlaceholder/> : <OutputImage url={state.finalImageUrl}/> }
        </div>
      </div>
    </section>
  )
}

export default OutputContainer;

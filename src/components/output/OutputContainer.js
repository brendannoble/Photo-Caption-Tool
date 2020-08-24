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
        <div className="flex flex-col items-center">
          { (state.finalImageUrl === '') ? <OutputPlaceholder/> : <OutputImage url={state.finalImageUrl}/> }
          { (state.finalImageUrl !== '') ? (
            <a href="mailto:me@brendannoble.com?subject=PhotoCaptionTool%20Issue">
              <div className="mt-10 px-4 py-2 font-bold border-2 border-gray-500 inline-block rounded-md hover:bg-yellow-300 hover:border-yellow-600 text-gray-800 transition-colors duration-200">
                <i className="fas fa-exclamation-triangle mr-1"></i> See an issue? Report it here
              </div>
            </a>
          ) : null }
        </div>
      </div>
    </section>
  )
}

export default OutputContainer;

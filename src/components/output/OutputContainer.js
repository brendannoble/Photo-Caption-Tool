import React, { useContext } from 'react';
import { SettingsContext } from '../../contexts/SettingsContext';
import OutputPlaceholder from './OutputPlaceholder';
import OutputImage from './OutputImage';
import SaveButton from './SaveButton';

const OutputContainer = () => {

  const { state } = useContext(SettingsContext);

  return (
    <section className="flex flex-col md:h-screen overflow-y-auto w-full md:w-72 px-4 py-4 md:py-20 bg-gray-800">
      <h1 id="image-output" className="section-header">Image Output</h1>
      <div className="card p-5 mb-8">
        { (state.finalImageUrl !== '') ? <SaveButton url={state.finalImageUrl} filename={state.fileName} /> : null }
        <div className="flex flex-col items-center">
          { (state.finalImageUrl === '') ? <OutputPlaceholder/> : <OutputImage url={state.finalImageUrl}/> }
          { (state.finalImageUrl !== '') ? (
            <a href="mailto:me@brendannoble.com?subject=PhotoCaptionTool%20Issue">
              <div className="font-bold text-xs text-gray-200 bg-gray-800 py-2 px-4 rounded-md mt-4 hover:bg-yellow-500 hover:text-gray-900">
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

import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../contexts/SettingsContext';
import OutputPlaceholder from './OutputPlaceholder';
import OutputImage from './OutputImage';
import SaveButton from './SaveButton';

const OutputContainer = () => {

  const { state } = useContext(SettingsContext);

  const [ open, setOpen ] = useState(false);

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
      <div>
        <h1 onClick={() => setOpen(!open)} className="cursor-pointer section-header flex justify-between items-center">How to use <i className="fa fa-chevron-down"></i> </h1>
        { (open) ? (
        <ol className="list-decimal text-gray-400 px-4">
          <li>Click select or drag an image to select an image to which you want to add a caption</li>
          <li>Input your text in the "Edit text" box</li>
          <li>Use the controls to adjust your caption to your preference</li>
          <li>Click "Create Captioned Image" to generate a full-resolution photo with your caption</li>
          <li>Click the "Save Image" button to save it to your computer</li>
        </ol>
        ) : null}
      </div>
    </section>
  )
}

export default OutputContainer;

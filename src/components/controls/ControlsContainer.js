import React from 'react';
import TextInputModule from './modules/TextInputModule';
import FileUploadModule from './modules/FileUploadModule';
import FontSizeModule from './modules/FontSizeModule';
import MarginSizeModule from './modules/MarginSizeModule';
import AppearanceModule from './modules/AppearanceModule';
import TextColorModule from './modules/TextColorModule';
import BackgroundColorModule from './modules/BackgroundColorModule';
import FontSelectorModule from './modules/FontSelectorModule';

const ControlsContainer = () => {
  return (
    <>
      <div className="flex flex-col justify-center md:justify-start flex-wrap md:flex-row mt-2">
        <div className="flex-1 md:mx-3">
          <TextInputModule/>
        </div>
        {/* TODO font selection */}
        <div className="md:mx-3">
          <FontSelectorModule/>
        </div>
      </div>
      <div className="flex flex-col justify-center md:justify-start flex-wrap md:flex-row mb-2">
        <FileUploadModule/>
        <FontSizeModule/>
        <MarginSizeModule/>
        <AppearanceModule/>
        <TextColorModule/>
        <BackgroundColorModule/>
      </div>
    </>
  )
}

export default ControlsContainer;

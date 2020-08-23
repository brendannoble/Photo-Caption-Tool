import React from 'react';
import TextInputModule from './modules/TextInputModule';
import FileUploadModule from './modules/FileUploadModule';
import FontSizeModule from './modules/FontSizeModule';
import MarginSizeModule from './modules/MarginSizeModule';
import AppearanceModule from './modules/AppearanceModule';
import TextColorModule from './modules/TextColorModule';
import BackgroundColorModule from './modules/BackgroundColorModule';

const ControlsContainer = () => {
  return (
    <>
      <div className="flex mt-2">
        <TextInputModule/>
        {/* TODO font selection */}
      </div>
      <div className="flex flex-col justify-center flex-wrap md:flex-row mb-2">
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

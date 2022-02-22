import React from 'react';
import TextInputModule from './modules/TextInputModule';
import FileUploadModule from './modules/FileUploadModule';
import FontSizeModule from './modules/FontSizeModule';
import MarginSizeModule from './modules/MarginSizeModule';
import AppearanceModule from './modules/AppearanceModule';
import TextColorModule from './modules/TextColorModule';
import BackgroundColorModule from './modules/BackgroundColorModule';
import FontSelectorModule from './modules/FontSelectorModule';
import QualityModule from './modules/QualityModule';

const ControlsContainer = () => {
  return (
    <div className="md:h-screen overflow-y-auto w-full md:w-72 px-4 py-4 md:py-16 bg-gray-800">
        <TextInputModule/>
        <FileUploadModule/>
        <AppearanceModule/>
        <div className="flex gap-2">
          <FontSizeModule/>
          <MarginSizeModule/>
        </div>
        <FontSelectorModule/>
        <TextColorModule/>
        <BackgroundColorModule/>
        <QualityModule/>
    </div>
  )
}

export default ControlsContainer;

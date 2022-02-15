import React from 'react';
import './index.css';
import Header from './components/layout/Header';
import SettingsContextProvider from './contexts/SettingsContext';
import RenderController from './components/render/RenderController';
import ControlsContainer from './components/controls/ControlsContainer';
import OutputContainer from './components/output/OutputContainer';
import ScrollFAB from './components/util/ScrollFAB';

const App = () => {
  return (
    <div className="App">
      <SettingsContextProvider>
        <div className="md:h-screen overflow-y-auto">
          <Header/>
          <main className="flex flex-col md:flex-row md:h-screen">
            <div className="order-2 md:order-1 md:flex-1 md:h-screen"><ControlsContainer /></div>
            <div className="order-1 md:order-2 md:grow w-full md:h-screen"><RenderController/></div>
            <div className="order-3 md:order-3 md:flex-1 md:h-screen">
              <OutputContainer />
            </div>
          </main>
        </div>
        <div className="block md:hidden">
          <ScrollFAB />
        </div>
      </SettingsContextProvider>
    </div>
  );
}

export default App;

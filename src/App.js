import React from 'react';
import './index.css';
import Header from './components/layout/Header';
import PreviewContainer from './components/preview/PreviewContainer';
import OutputContainer from './components/output/OutputContainer';
import Footer from './components/layout/Footer';
import RenderButton from './components/render/RenderButton';
import SettingsContextProvider from './contexts/SettingsContext';

const App = () => {
  return (
    <div className="App">
      <SettingsContextProvider>
        <Header/>
        <main className="container mx-auto py-8 px-4">
          <PreviewContainer/>
          <RenderButton/>
          <OutputContainer/>
        </main>
        <Footer/>
      </SettingsContextProvider>
    </div>
  );
}

export default App;

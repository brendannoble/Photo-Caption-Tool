import React from 'react';
import './index.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SettingsContextProvider from './contexts/SettingsContext';
import RenderController from './components/render/RenderController';
import HelpSection from './components/help/HelpSection';
import AboutSection from './components/help/AboutSection';

const App = () => {
  return (
    <div className="App">
      <SettingsContextProvider>
        <Header/>
        <main className="container mx-auto pt-8 pb-12 px-4">
          <RenderController/>
        </main>
        <HelpSection/>
        <AboutSection/>
        <Footer/>
      </SettingsContextProvider>
    </div>
  );
}

export default App;

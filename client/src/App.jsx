import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header';
import FrontPage from './components/FrontPage';
import MusicPlayer from './components/MusicPlayer';
import AuthModal from './components/AuthModal';
import { ModalContextProvider } from './contexts/ModalOpenContext';
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';

function App() {
  return (
    <div className="App">
      <ModalContextProvider>
        <MusicPlayerProvider>
          <AuthModal />
          <Header />
          <FrontPage />
          <MusicPlayer />
        </MusicPlayerProvider>
      </ModalContextProvider>
    </div>
  );
}

export default App;

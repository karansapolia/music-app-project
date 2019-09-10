import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header';
import FrontPage from './components/FrontPage';
import MusicPlayer from './components/MusicPlayer';
import AuthModal from './components/AuthModal';
import { ModalContextProvider } from './helpers/ModalOpenContext';

function App() {
  return (
    <div className="App">
      <ModalContextProvider>
        <AuthModal />
        <Header />
        <FrontPage />
        <MusicPlayer />
      </ModalContextProvider>
    </div>
  );
}

export default App;

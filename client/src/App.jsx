import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header';
import FrontPage from './components/FrontPage';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="App">
      <Header />
      <FrontPage />
      <MusicPlayer />
    </div>
  );
}

export default App;

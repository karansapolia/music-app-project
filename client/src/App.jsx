import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import FrontPage from './components/FrontPage';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="App">
      <FrontPage />
      <MusicPlayer />
    </div>
  );
}

export default App;

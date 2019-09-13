import React, { useContext, useReducer } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header';
import FrontPage from './components/FrontPage';
import MusicPlayer from './components/MusicPlayer';
import AuthModal from './components/AuthModal';
import { ModalContextProvider } from './contexts/ModalOpenContext';
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';
import GlobalContext from './contexts/GlobalContext';
import reducer from './contexts/reducer';

function App() {
  const initialState = useContext(GlobalContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <GlobalContext.Provider value={{ state, dispatch }}>
        <ModalContextProvider>
          <MusicPlayerProvider>
            <AuthModal />
            <Header />
            <FrontPage />
            <MusicPlayer />
          </MusicPlayerProvider>
        </ModalContextProvider>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;

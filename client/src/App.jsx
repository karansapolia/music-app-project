import React, { useContext, useReducer } from "react";
// import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import MusicPlayer from "./components/MusicPlayer";
import AuthModal from "./components/AuthModal";
import { ModalContextProvider } from "./contexts/ModalOpenContext";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import GlobalContext from "./contexts/GlobalContext";
import reducer from "./contexts/reducer";

import "semantic-ui-css/semantic.min.css";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const initialState = useContext(GlobalContext);
  initialState.user = JSON.parse(localStorage.getItem("user"));
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <GlobalContext.Provider value={{ state, dispatch }}>
        <ModalContextProvider>
          <MusicPlayerProvider>
            <CssBaseline />
            <Router>
              <AuthModal />
              <Header />
              <FrontPage />
              <MusicPlayer />
            </Router>
          </MusicPlayerProvider>
        </ModalContextProvider>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;

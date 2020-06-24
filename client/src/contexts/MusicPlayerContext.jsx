import React, { useState } from "react";
import PropTypes from "prop-types";

import Cute from "../assets/songs/cute.mp3";
// import Memories from "../assets/songs/memories.mp3";
// import HappyRock from "../assets/songs/happyrock.mp3";

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(Cute),
    tracks: [],
    currentTrackIndex: null,
    isPlaying: false,
  });

  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

MusicPlayerContext.propTypes = {
  children: PropTypes.element,
};

MusicPlayerProvider.propTypes = {
  children: PropTypes.element,
};

export { MusicPlayerContext, MusicPlayerProvider };

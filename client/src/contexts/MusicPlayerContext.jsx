import React, { useState } from 'react';

import Cute from '../assets/songs/cute.mp3';
import Memories from '../assets/songs/memories.mp3';
import HappyRock from '../assets/songs/happyrock.mp3';

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = props => {
  const [state, setState] = useState({
    audioPlayer: new Audio(Cute),
    tracks: [
      {
        name: 'Cute',
        file: Cute,
      },
      {
        name: 'Memories',
        file: Memories,
      },
      {
        name: 'Happy Rock',
        file: HappyRock,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });

  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };

import React, { useState } from 'react';
import { Button } from '../common/helpers';
import './styles.css';

const MusicPlayer = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div className="music-player">
      <Button circular icon="like" content="like" />
      <div>
        <Button circular icon="left chevron" />
        {playState ? (
          <Button circular icon="pause" content="pause" onClick={() => setPlayState(false)} />
        ) : (
          <Button circular icon="play" content="play" onClick={() => setPlayState(true)} />
        )}
        <Button circular icon="right chevron" />
      </div>
      <div>
        <Button circular icon="shuffle" />
        <Button circular icon="sync" />
      </div>
    </div>
  );
};

export default MusicPlayer;

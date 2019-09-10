import React from 'react';
import { Button } from '../common/helpers';
import './styles.css';
import useMusicPlayer from '../../hooks/useMusicPlayer';

const MusicPlayer = () => {
  const { isPlaying, currentTrackName, togglePlay, playPreviousTrack, playNextTrack } = useMusicPlayer();
  return (
    <div className="music-player">
      <div>
        <Button circular icon="like" content="like" />
      </div>
      <div>
        <Button circular icon="left chevron" onClick={playPreviousTrack} />
        {isPlaying ? (
          <Button circular icon="pause" content="pause" onClick={togglePlay} />
        ) : (
          <Button circular icon="play" content="play" onClick={togglePlay} />
        )}
        <Button circular icon="right chevron" onClick={playNextTrack} />
        <h2>{currentTrackName}</h2>
      </div>
      <div>
        <Button circular icon="shuffle" />
        <Button circular icon="sync" />
      </div>
    </div>
  );
};

export default MusicPlayer;

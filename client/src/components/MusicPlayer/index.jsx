import React from "react";
import { Button } from "../common/helpers";
import "./styles.css";
import useMusicPlayer from "../../hooks/useMusicPlayer";

const MusicPlayer = () => {
  const {
    isPlaying,
    currentTrackName,
    togglePlay,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();
  return (
    <div className="music-player">
      <div className="first-row">
        <h3>{currentTrackName}</h3>
      </div>
      <div className="second-row">
        <div>
          <Button circular icon="like" content="like" />
        </div>
        <div>
          <Button circular icon="left chevron" onClick={playPreviousTrack} />
          {isPlaying ? (
            <Button
              id="play-button"
              circular
              icon="pause"
              onClick={togglePlay}
            />
          ) : (
            <Button
              id="play-button"
              circular
              icon="play"
              onClick={togglePlay}
            />
          )}
          <Button circular icon="right chevron" onClick={playNextTrack} />
        </div>
        <div>
          <Button circular icon="shuffle" />
          <Button circular icon="sync" />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;

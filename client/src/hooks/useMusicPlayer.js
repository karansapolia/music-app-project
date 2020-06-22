import { useEffect, useContext } from 'react';
import { MusicPlayerContext } from '../contexts/MusicPlayerContext';

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext);

  useEffect(() => {
    state.audioPlayer.addEventListener('ended', () => {
      setState({ ...state, isPlaying: false });
      console.log('Song ended. Player stopped');
    });
  }, []);

  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause();
      setState({ ...state, isPlaying: !state.isPlaying });
    } else {
      state.audioPlayer.play();
      setState({ ...state, isPlaying: !state.isPlaying });
    }
  }

  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      setState({ ...state, currentTrackIndex: index, isPlaying: true });
    }
  }

  function playPreviousTrack() {
    const newIndex =
      (((state.currentTrackIndex + -1) % state.tracks.length) + state.tracks.length) %
      state.tracks.length;
    playTrack(newIndex);
  }

  function playNextTrack() {
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playTrack(newIndex);
  }

  return {
    playTrack,
    togglePlay,
    currentTrackName:
      state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    playPreviousTrack,
    playNextTrack,
    state,
    setState,
  };
};

export default useMusicPlayer;

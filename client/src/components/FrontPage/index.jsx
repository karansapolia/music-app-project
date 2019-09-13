import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, Placeholder } from '../common/helpers';
import SongCard from '../SongCard/index';
import GridLayout from '../common/GridLayout';
import useMusicPlayer from '../../hooks/useMusicPlayer';
import { fetchFirst20Songs } from '../../API';
import GlobalContext from '../../contexts/GlobalContext';

const placeholderImages = (
  <>
    <div>
      <Card>
        <Card.Content>
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>
        </Card.Content>
        Song 1
      </Card>
    </div>
    <div>
      <Card>
        <Card.Content>
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>
        </Card.Content>
        Song 2
      </Card>
    </div>
    <div>
      <Card>
        <Card.Content>
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>
        </Card.Content>
        Song 3
      </Card>
    </div>
  </>
);

const RowElements = ({ children }) => <div>{children || placeholderImages}</div>;

const FrontPage = () => {
  const state = useContext(GlobalContext);
  const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();
  const [error, setError] = useState(null);
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await fetchFirst20Songs(state.user.token);
      if (!response.data.songs) {
        setError('No songs found');
      } else {
        setError(null);
        setSongs(response.data.songs);
      }
    } catch (err) {
      setError('Network error');
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const conditionallyRenderSongs = () => {
    if (error) {
      return <h4>{error}</h4>
    }
    return (
      <div>
        {songs.map((track, index) => (
          <SongCard key={track.name} name={track.name} onClick={() => playTrack(index)} />
      ))}
      </div>
    );
  };

  return (
    <GridLayout stackSize={16} columnSize="equal" verticalAlign="middle" textAlign="center">
      {conditionallyRenderSongs}
    </GridLayout>
  );
};

RowElements.propTypes = {
  children: PropTypes.node,
};

RowElements.defaultProps = {
  children: placeholderImages,
};

export default FrontPage;

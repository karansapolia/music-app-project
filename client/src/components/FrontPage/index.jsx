import React from 'react';
import PropTypes from 'prop-types';
import { Card, Placeholder } from '../common/helpers';
import SongCard from '../SongCard/index';
import GridLayout from '../common/GridLayout';
import useMusicPlayer from '../../hooks/useMusicPlayer';

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
  const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();
  return (
    <GridLayout stackSize={16} columnSize="equal" verticalAlign="middle" textAlign="center">
      {trackList.map((track, index) => (
        <SongCard key={track.name} name={track.name} onClick={() => playTrack(index)} />
      ))}
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

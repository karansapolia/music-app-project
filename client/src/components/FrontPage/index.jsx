import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Card, Placeholder } from "../common/helpers";
import SongCard from "../SongCard/index";
import GridLayout from "../common/GridLayout";
import useMusicPlayer from "../../hooks/useMusicPlayer";
import { fetchItunesSearchAPIResults } from "../../API";
// import GlobalContext from '../../contexts/GlobalContext';

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

const RowElements = ({ children }) => (
  <div>{children || placeholderImages}</div>
);

const FrontPage = () => {
  // const state = useContext(GlobalContext);
  const {
    // trackList,
    // currentTrackName,
    playTrack,
    // isPlaying,
    state: musicContextState,
    setState: setMusicContextState,
  } = useMusicPlayer();
  const [error, setError] = useState(null);
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      // const response = await fetchFirst20Songs(state.user.token);
      const response = await fetchItunesSearchAPIResults("Badshah");
      console.log(response.data);
      const onlySongs = response.data.filter(entry => entry.kind === "song");
      setSongs(onlySongs);
      console.log("Songs fetched and set.");
      // if (!response.data.songs) {
      //   setError('No songs found');
      // } else {
      //   setError(null);
      //   setSongs(response.data.songs);
      // }
      const newSongsState = [];
      onlySongs.forEach(song => {
        newSongsState.push({ name: song.trackName, file: song.previewUrl });
      });
      setMusicContextState({ ...musicContextState, tracks: newSongsState });
    } catch (err) {
      setError("Network error");
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const conditionallyRenderSongs = () => {
    if (error) {
      return <h4>{error}</h4>;
    }

    console.log("conditionallyRenderSongs ran!");
    return (
      <>
        {songs.map(track => (
          <SongCard
            coverImage={track.artworkUrl100}
            key={track.trackId}
            name={track.trackName}
            songPreview={track.previewUrl}
            onClick={event => {
              event.preventDefault();
              console.log("<SongCard /> clicked");
              playTrack(track.previewUrl, track.trackName);
            }}
          />
        ))}
      </>
    );
  };

  return (
    <GridLayout
      stackSize={16}
      columnSize={4}
      verticalAlign="middle"
      textAlign="center"
    >
      {songs.length > 0 ? conditionallyRenderSongs() : placeholderImages}
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

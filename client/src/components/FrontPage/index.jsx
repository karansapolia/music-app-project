import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import { Card, Placeholder } from "../common/helpers";
import SongCard from "../SongCard/index";
import GridLayout from "../common/GridLayout";
import useMusicPlayer from "../../hooks/useMusicPlayer";
// import { fetchItunesSearchAPIResults } from "../../API";
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

// const RowElements = ({ children }) => (
//   <div>{children || placeholderImages}</div>
// );

const FrontPage = () => {
  const { state: musicContextState } = useMusicPlayer();

  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    setTracks(musicContextState.tracks);
  }, [musicContextState]);
  // const state = useContext(GlobalContext);

  // const fetchSongs = async () => {
  //   try {
  //     // const response = await fetchFirst20Songs(state.user.token);
  //     const response = await fetchItunesSearchAPIResults("Badshah");
  //     console.log(response.data);
  //     const onlySongs = response.data.filter(entry => entry.kind === "song");
  //     console.log("Songs fetched and set.");
  //     const newSongsState = [];
  //     onlySongs.forEach(song => {
  //       newSongsState.push({ name: song.trackName, file: song.previewUrl });
  //     });
  //     setMusicContextState({ ...musicContextState, tracks: newSongsState });
  //   } catch (err) {
  //     setError("Network error");
  //   }
  // };

  // useEffect(() => {
  //   fetchSongs();
  // }, [tracks]);

  const conditionallyRenderSongs = () => {
    console.log("conditionallyRenderSongs ran!");
    console.log(musicContextState.tracks);
    return (
      <>
        {tracks.map((track, i) => (
          <SongCard
            coverImage={track.artworkUrl100}
            key={track.trackId}
            index={i}
            name={track.trackName}
            songPreview={track.previewUrl}
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
      {console.log("FrontPage render: ", tracks)}
      {tracks && tracks.length > 0
        ? conditionallyRenderSongs()
        : placeholderImages}
    </GridLayout>
  );
};

// RowElements.propTypes = {
//   children: PropTypes.node,
// };

// RowElements.defaultProps = {
//   children: placeholderImages,
// };

export default FrontPage;

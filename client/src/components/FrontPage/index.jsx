import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import { Card, Placeholder } from "../common/helpers";
import SongCard from "../SongCard/index";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMusicPlayer from "../../hooks/useMusicPlayer";
// import { fetchItunesSearchAPIResults } from "../../API";
// import GlobalContext from '../../contexts/GlobalContext';

const useStyles = makeStyles({
  grid: {
    margin: "6rem 0 0",
  },
});

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

const FrontPage = () => {
  const { state: musicContextState } = useMusicPlayer();
  const [tracks, setTracks] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    setTracks(musicContextState.tracks);
  }, [musicContextState]);

  const conditionallyRenderSongs = () => {
    console.log("conditionallyRenderSongs ran!");
    console.log(musicContextState.tracks);
    return (
      <>
        {tracks.map((track, i) => (
          <Grid item>
            <SongCard
              coverImage={track.artworkUrl100}
              key={track.trackId}
              index={i}
              name={track.trackName}
              songPreview={track.previewUrl}
            />
          </Grid>
        ))}
      </>
    );
  };

  return (
    <Grid
      container
      alignItems="stretch"
      justify="space-evenly"
      spacing={2}
      direction="row wrap"
      className={classes.grid}
    >
      {console.log("FrontPage render: ", tracks)}
      {tracks && tracks.length > 0
        ? conditionallyRenderSongs()
        : placeholderImages}
    </Grid>
  );
};

// RowElements.propTypes = {
//   children: PropTypes.node,
// };

// RowElements.defaultProps = {
//   children: placeholderImages,
// };

export default FrontPage;

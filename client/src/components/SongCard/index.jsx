import React from "react";
import PropTypes from "prop-types";
import { Card, Image, Icon } from "../common/helpers";
import useMusicPlayer from "../../hooks/useMusicPlayer";

const SongCard = ({
  coverImage,
  name,
  artist,
  album,
  length,
  likes,
  index,
}) => {
  const { state, playTrack } = useMusicPlayer();
  return (
    <Card
      onClick={event => {
        event.preventDefault();
        console.log(`<SongCard /> ${index} clicked`);
        console.log(
          "MusicPlayerContext state.tracks[index] : ",
          state.tracks[index],
        );
        playTrack(index);
      }}
    >
      <Image src={coverImage} wrapped />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{artist}</span>
        </Card.Meta>
        <Card.Description>
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="summary">{album}</div>
              </div>
            </div>
          </div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span className="left floated">
          <Icon name="heart outline" />
          {likes}
        </span>
        <span className="right floated">
          <Icon name="clock" />
          {`${length} s`}
        </span>
      </Card.Content>
    </Card>
  );
};

SongCard.propTypes = {
  name: PropTypes.string,
  length: PropTypes.number,
  artist: PropTypes.string,
  album: PropTypes.string,
  coverImage: PropTypes.string,
  likes: PropTypes.number,
  index: PropTypes.number,
  songPreview: PropTypes.any,
};

SongCard.defaultProps = {
  coverImage:
    "https://i.pinimg.com/736x/02/b8/94/02b894f7ea6ad9f724648ee511ad018f--edm-music-house-music.jpg",
  name: "Stranger",
  artist: "Chris Lake",
  album: "Yester Years",
  likes: 255,
  length: 200,
};

export default SongCard;

import React from 'react';
import { Card, Placeholder } from 'semantic-ui-react';
import './styles.css';
import PropTypes from 'prop-types';
import SongCard from '../SongCard/index';

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

const RowElements = ({ index, children }) => (
  <div className={`songs-row-${index}`}>{children || placeholderImages}</div>
);

const FrontPage = () => {
  return (
    <div className="frontPage">
      <RowElements index={1}>
        <SongCard />
        <SongCard />
        <SongCard />
      </RowElements>
      <RowElements index={2} />
      <RowElements index={3} />
    </div>
  );
};

RowElements.propTypes = {
  index: PropTypes.number,
  children: PropTypes.node,
};

RowElements.defaultProps = {
  index: 2,
  children: placeholderImages,
};

export default FrontPage;

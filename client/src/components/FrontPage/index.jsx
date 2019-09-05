import React from 'react';
import PropTypes from 'prop-types';
import { Card, Placeholder } from '../common/helpers';
import SongCard from '../SongCard/index';
import GridLayout from '../common/GridLayout';

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
  return (
    <GridLayout stackSize={12} columnSize="equal" verticalAlign="middle" textAlign="center">
      <SongCard />
      {placeholderImages}
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

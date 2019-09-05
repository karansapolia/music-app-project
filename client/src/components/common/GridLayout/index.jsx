import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../helpers';

const GridLayout = ({ columnSize, verticalAlign, textAlign, children }) => {
  return (
    <Grid stackable columns={columnSize} centered verticalAlign={verticalAlign} textAlign={textAlign}>
      {children}
    </Grid>
  );
};

GridLayout.propTypes = {
  columnSize: PropTypes.number || PropTypes.string,
  verticalAlign: PropTypes.oneOf(['bottom', 'middle', 'top']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justified']),
  children: PropTypes.node,
};

GridLayout.defaultProps = {
  columnSize: 2,
  verticalAlign: 'middle',
  textAlign: 'center',
  children: <div />,
};
export default GridLayout;

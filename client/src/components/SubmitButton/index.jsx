import React from 'react';
import { Button } from '../common/helpers';

const SubmitButton = ({ children, loading }) => (
  <Button type="submit" color="green" fluid loading={loading} disabled={loading}>
    {children}
  </Button>
);

export default SubmitButton;

import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const PasswordInput = ({ password, ...others }) => {
  return (
    <Form.field
      required
      fluid
      iconPosition="left"
      control={Input}
      id={id}
      icon="lock"
      placeholder="Enter password"
      type="password"
      label="Enter password"
      {...others}
    />
  );
}

export default PasswordInput;

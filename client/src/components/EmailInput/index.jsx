import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const EmailInput = (props) => (
  <Form.field
    required
    fluid
    iconPosition="left"
    control={Input}
    id="email"
    icon="email"
    placeholder="Enter e-mail address"
    type="email"
    label="e-mail"
    {...props}
  />
);

export default EmailInput;

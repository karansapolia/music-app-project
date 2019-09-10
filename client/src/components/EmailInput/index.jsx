import React from 'react';
import Input from '../FormInput';

const EmailInput = props => (
  <Input required id="email" icon="email" placeholder="Enter e-mail address" type="email" label="e-mail" {...props} />
);

export default EmailInput;

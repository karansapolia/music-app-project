import React from 'react';
import FormInput from '../FormInput';

const TextInput = ({ name, iconName, ...props }) => (
  <FormInput required icon={iconName} placeholder={name} type="text" label={name} id={name} {...props} />
);

export default TextInput;

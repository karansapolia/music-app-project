import React from 'react';
import Input from '../FormInput';

const PasswordInput = ({ verify, passwordToMatch, ...props }) => {
  let error =
    'Password should be atleast 8 characters long and contain atleast one uppercase, lowercase and a special cahracter';
  let label = 'Password';
  let id = 'password';
  let pattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$';

  if (verify) {
    error = 'Verification password should match above entered password';
    label = 'Verify Password';
    id = 'verify-password';
    pattern = passwordToMatch;
  }

  return (
    <Input
      id={id}
      icon="lock"
      placeholder="Password"
      type="password"
      pattern={pattern}
      title={error}
      label={label}
      required
      {...props}
    />
  );
};

export default PasswordInput;

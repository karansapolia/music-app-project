import React, { useState } from 'react';
import { Menu } from '../../common/helpers';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';

const Authentication = () => {
  const [activeItem, setActiveItem] = useState('signin');
  const menuStyle = {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  };

  const renderForm = () => {
    if (activeItem === 'signin') {
      return <SigninForm />;
    }
    if (activeItem === 'signup') {
      return <SignupForm />;
    }
    return null;
  };

  return (
    <>
      <Menu pointing secondary style={menuStyle}>
        <Menu.Item name="Sign In" active={activeItem === 'signin'} onClick={() => setActiveItem('signin')} />
        <Menu.Item name="Sign Up" active={activeItem === 'signup'} onClick={() => setActiveItem('signup')} />
      </Menu>
      {renderForm()}
    </>
  );
};

export default Authentication;

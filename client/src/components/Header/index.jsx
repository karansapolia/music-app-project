import React, { useState, useContext } from 'react';
import { Menu, Input, Container } from '../common/helpers';
import UserDropdown from '../UserDropdown';
import Logo from '../Logo';
import GlobalContext from '../../contexts/GlobalContext';
import './styles.css';
import { MODAL_STATE } from '../../contexts/constants';

const Header = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const handleItemClick = (event, { name }) => {
    if (name === 'sign-in') {
      dispatch({
        type: MODAL_STATE,
        payload: { ...state.modalState, dimmer: 'blurring', open: true },
      });
    }
  };

  return (
    <Menu fluid borderless fixed="top" widths="3">
      <Container>
        <Menu.Item name="logo" icon>
          <Logo />
        </Menu.Item>
        <Menu.Item name="search">
          <Input className="icon" icon="search" placeholder="Search..." />
        </Menu.Item>
        {
          state.user.token ? (
            <Menu.Item name="user-profile" onClick={handleItemClick}>
              <UserDropdown />
            </Menu.Item>
          ): (
            <Menu.Item name="sign-in" onClick={handleItemClick}>
              <p>Sign In</p>
            </Menu.Item>
          )
        }
      </Container>
    </Menu>
  );
};

export default Header;

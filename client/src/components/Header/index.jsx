import React, { useState, useContext } from 'react';
import { Menu, Input, Container } from '../common/helpers';
import Logo from '../Logo';
import { ModalOpenContext } from '../../contexts/ModalOpenContext';
import './styles.css';

const Header = () => {
  const [activeItem, setActiveItem] = useState('');
  const [state, setState] = useContext(ModalOpenContext);

  const handleItemClick = (event, { name }) => {
    setActiveItem(name);
    if (name === 'sign-in') {
      setState(state => ({ ...state, dimmer: 'blurring', open: true }));
    }
  };

  return (
    <Menu fluid borderless fixed="top" widths="3">
      <Container>
        <Menu.Item name="logo" icon active={activeItem === 'logo'} onClick={handleItemClick}>
          <Logo />
        </Menu.Item>
        <Menu.Item name="search" active={activeItem === 'search'} onClick={handleItemClick}>
          <Input className="icon" icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item name="sign-in" active={activeItem === 'sign-in'} onClick={handleItemClick}>
        Sign In
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;

import React, { useState } from 'react';
import { Menu, Input } from '../common/helpers';
import Logo from '../Logo';
import './styles.css';

const Header = () => {
  const [activeItem, setActiveItem] = useState('logo');
  const handleItemClick = (event, { name }) => setActiveItem(name);

  return (
    <Menu stackable fluid fixed="top" widths="3">
      <Menu.Item name="logo" icon active={activeItem === 'logo'} onClick={handleItemClick}>
        <Logo />
      </Menu.Item>
      <Menu.Item name="search" active={activeItem === 'search'} onClick={handleItemClick}>
        <Input className="icon" icon="search" placeholder="Search..." />
      </Menu.Item>
      <Menu.Item name="sign-in" active={activeItem === 'sign-in'} onClick={handleItemClick}>
        Sign in
      </Menu.Item>
    </Menu>
  );
};

export default Header;

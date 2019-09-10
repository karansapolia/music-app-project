import React from 'react';
import { Link } from '@reach/router';
import './styles.css';

const Logo = () => (
  <nav>
    <Link to="/">
      <img src="../../assets/logo192.png" alt="logo" />
    </Link>
  </nav>
);

export default Logo;

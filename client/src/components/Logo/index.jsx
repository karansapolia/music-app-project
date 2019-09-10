import React from 'react';
import { Link } from '@reach/router';
import { Image } from '../common/helpers';

const Logo = () => (
  <nav>
    <Link to="/">
      <Image 
        src="./logo192.png" 
        alt="logo"
        size="mini"
        centered
      />
    </Link>
  </nav>
);

export default Logo;

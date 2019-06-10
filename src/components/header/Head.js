import React from 'react';

import { HeadMain } from './styles';

import Hamburger from './Hamburger';
import Logo from './Logo';
import Utilities from './Utilities';

function Head() {
  return (
    <HeadMain>
      <Hamburger />
      <Logo />
      <Utilities />
    </HeadMain>
  );
}

export default Head;

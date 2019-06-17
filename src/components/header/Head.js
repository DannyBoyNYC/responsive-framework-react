import React from 'react';

import { HeadMainDiv } from './styles';

import Hamburger from './Hamburger';
import Logo from './Logo';
import Utilities from './Utilities';

function Head(props) {
  return (
    <HeadMainDiv className="head">
      <Hamburger menuJSON={props.menuJSON} />
      <Logo />
      <Utilities />
    </HeadMainDiv>
  );
}

export default Head;

import React from 'react';

import { LogoArt } from './styles';
// https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
import { ReactComponent as LogoType } from '../art/logo.svg';
import { ReactComponent as LogoTypeWhite } from '../art/logo-white.svg';

function Logo(props) {
  return (
    <LogoArt className="logo">
      {props.color ? <LogoTypeWhite /> : <LogoType color={props.color} />}
    </LogoArt>
  );
}

export default Logo;

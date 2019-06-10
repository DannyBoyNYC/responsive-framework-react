import React from 'react';

import { LogoArt } from './styles';
// https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
import { ReactComponent as LogoType } from '../art/logo.svg';

function Logo() {
  return (
    <LogoArt>
      <LogoType />
    </LogoArt>
  );
}

export default Logo;

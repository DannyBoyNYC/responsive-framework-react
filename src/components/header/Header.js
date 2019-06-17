import React from 'react';
import Head from './Head';
import { MainHeader } from './styles';

function Header(props) {
  return (
    <MainHeader>
      <Head menuJSON={props.menuJSON} />
    </MainHeader>
  );
}

export default Header;

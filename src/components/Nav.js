import React from 'react';
import WindowDimensionsProvider from './windowDimensionsProvider';
import { GlobalStyles } from './styles/global';
import Header from './header/Header';
import Navbar from './navbar/Navbar';

import menuJSON from './data/menu.json';

function Nav() {
  return (
    <WindowDimensionsProvider>
      <GlobalStyles />
      <Header menuJSON={menuJSON} />
      <Navbar menuJSON={menuJSON} />
    </WindowDimensionsProvider>
  );
}

export default Nav;

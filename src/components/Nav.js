import React, { useState } from 'react';
import WindowDimensionsProvider from './windowDimensionsProvider';
import { GlobalStyles } from './styles/global';
import Header from './header/Header';
import Navbar from './navbar/Navbar';

import menuJSON from './data/menu.json';

function Nav() {
  // const [fixed, setFixed] = useState('');

  return (
    <WindowDimensionsProvider>
      <GlobalStyles />
      <Header
        // style={{ position: 'fixed' }}
        menuJSON={menuJSON}
        // className={
        //   window.scrollY >= document.querySelector('nav').offsetTop
        //     ? 'fixed'
        //     : ''
        // }
      />
      <Navbar menuJSON={menuJSON} />
    </WindowDimensionsProvider>
  );
}

export default Nav;

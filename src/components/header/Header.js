import React from 'react';

import Head from './Head';

function Header(props) {
  return (
    <header>
      <Head menuJSON={props.menuJSON} />
    </header>
  );
}

export default Header;

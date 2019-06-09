// the blue nav bar
import React from 'react';

import NavItem from './NavItem';
import More from './More';

import { useWindowDimensions } from '../windowDimensionsProvider';
import { MainNav, NavlistUl } from './styles';

import menuJSON from '../data/menu.json';

function Navbar() {
  const { width } = useWindowDimensions();
  return (
    <MainNav>
      <NavlistUl>
        {menuJSON.results.map(res => (
          // NavItem.js
          <NavItem
            key={res.id}
            section={res.section}
            subsections={res.subsections}
          />
        ))}
        {/* the More.js  component*/}
        {width > 760 && width < 1140 ? <More sections={menuJSON} /> : ''}
      </NavlistUl>
    </MainNav>
  );
}

export default Navbar;

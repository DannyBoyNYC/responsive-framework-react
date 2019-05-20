import React from 'react';

import NavItem from './NavItem';

import styled from 'styled-components';
import { device } from '../styles/device';

import menuJSON from '../data/menu.json';

const MainNav = styled.nav`background-color: var(--link);`;

const NavlistUl = styled.ul`
  display: none;
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

function Navbar() {
  return (
    <MainNav className="primary">
      <NavlistUl>
        {menuJSON.results.map(res =>
          <NavItem
            key={res.id}
            section={res.section}
            subsections={res.subsections}
          />,
        )}
      </NavlistUl>
    </MainNav>
  );
}

export default Navbar;

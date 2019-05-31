import React from 'react';

import NavItem from './NavItem';
import More from './More';

import styled from 'styled-components';
import { device } from '../styles/device';

import { useWindowDimensions } from '../windowDimensionsProvider';

import menuJSON from '../data/menu.json';

const MainNav = styled.nav`background-color: var(--link);`;

const NavlistUl = styled.ul`
  display: none;
  @media ${device.tablet} {
    // 760px
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .t-primeservices,
    .t-municipals,
    .t-rates,
    .t-indices {
      display: none;
    }
    .t-equities ul,
    .t-fx ul,
    .t-primeservices ul,
    .t-municipals ul,
    .t-rates ul,
    .t-indices ul {
      right: 1rem;
    }
  }
  @media ${device.desktopSm} {
    // 980px
    .t-indices,
    .t-rates {
      display: block;
    }
  }
  @media ${device.desktop} {
    //1140px
    .t-indices,
    .t-rates,
    .t-municipals,
    .t-primeservices {
      display: block;
    }
  }
  @media ${device.desktopLg} {
    //1300px
  }
`;

function Navbar() {
  const { width } = useWindowDimensions();
  return (
    <MainNav>
      <NavlistUl>
        {menuJSON.results.map(res =>
          <NavItem
            key={res.id}
            section={res.section}
            subsections={res.subsections}
          />,
        )}
        {width > 760 && width < 1140 ? <More /> : ''}
      </NavlistUl>
    </MainNav>
  );
}

export default Navbar;

import React from "react";

import NavItem from "./NavItem";
import ItemTwo from "./Itemtwo";

import styled from "styled-components";
import { device } from "../styles/device";

import { useWindowDimensions } from "../responsive-component";

import menuJSON from "../data/menu.json";

const MainNav = styled.nav`
  background-color: var(--link);
`;

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
  const { width } = useWindowDimensions();
  return (
    <MainNav>
      <NavlistUl>
        {menuJSON.results.map(res => (
          <NavItem
            // width={width}
            key={res.id}
            section={res.section}
            subsections={res.subsections}
          />
        ))}
        {width > 200 && width < 1700 ? <ItemTwo /> : ""}
      </NavlistUl>
    </MainNav>
  );
}

export default Navbar;

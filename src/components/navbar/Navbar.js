import React from "react";

import NavItem from "./NavItem";

import styled from "styled-components";

import { menuData } from "../data/menu";

const MainNav = styled.nav`
  background-color: var(--link);
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function Navbar() {
  return (
    <MainNav className='primary'>
      <NavList>
        {Object.keys(menuData).map(
          key => (
            <NavItem key={key} link={key} />
          )
          // console.log(key)
        )}
      </NavList>
    </MainNav>
  );
}

export default Navbar;

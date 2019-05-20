import React from "react";

import NavItem from "./NavItem";

import styled from "styled-components";

// import { menuData } from "../data/menu";
import menuJSON from "../data/menu.json";

const MainNav = styled.nav`
  background-color: var(--link);
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

function Navbar() {
  return (
    <MainNav className='primary'>
      <NavList>
        {/* {console.log(menuJSON.results[0].section)}
        {console.log(Object.keys(menuJSON.results))}
        {console.log(Object.keys(menuJSON.results[0]))} */}
        {/* {console.log("temp", menuJSON.results)} */}
        {menuJSON.results.map(res => (
          <NavItem
            key={res.id}
            section={res.section}
            subsections={res.subsections}
          />
        ))}
      </NavList>
    </MainNav>
  );
}

export default Navbar;
